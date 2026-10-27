'use strict';

const express = require('express');
const { body, validationResult, param } = require('express-validator');
const Contact = require('../models/Contact');

const router = express.Router();

function requireAdmin(req, res, next) {
  const key = req.headers['x-admin-key'];
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized. Admin key required.',
    });
  }
  next();
}

const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be 2–100 characters'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Must be a valid email address')
    .normalizeEmail(),

  body('subject')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Subject too long (max 200 chars)'),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 5000 }).withMessage('Message must be 10–5000 characters'),
];

// POST /api/contact
router.post('/', contactValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: 'Validation failed. Please check your input.',
      errors: errors.array().map(e => ({ field: e.path, message: e.msg })),
    });
  }

  if (req.dbUnavailable) {
    return res.status(200).json({
      success: true,
      message: "Message received! The database is currently in static mode, so please also email me directly at dwivedianandnarayan@gmail.com to ensure immediate reply.",
      data: { name: req.body.name, subject: req.body.subject, createdAt: new Date() }
    });
  }

  try {
    const { name, email, subject, message } = req.body;
    const ipAddress =
      req.headers['x-forwarded-for']?.split(',')[0].trim() ||
      req.socket?.remoteAddress ||
      'unknown';

    const contact = await Contact.create({
      name,
      email,
      subject: subject || 'No subject',
      message,
      ipAddress,
    });

    return res.status(201).json({
      success: true,
      message: "Message received! I'll get back to you soon.",
      data: {
        id: contact._id,
        name: contact.name,
        subject: contact.subject,
        createdAt: contact.createdAt,
      },
    });
  } catch (err) {
    console.error('Contact POST error:', err.message);
    return res.status(200).json({
      success: true,
      message: "Thank you! Please also email me directly at dwivedianandnarayan@gmail.com.",
    });
  }
});

// GET /api/contact (Admin)
router.get('/', requireAdmin, async (req, res) => {
  if (req.dbUnavailable) {
    return res.json({ success: true, data: [], pagination: { total: 0 } });
  }
  try {
    const page  = Math.max(1, parseInt(req.query.page  || '1', 10));
    const limit = Math.min(50, parseInt(req.query.limit || '20', 10));
    const skip  = (page - 1) * limit;

    const [messages, total] = await Promise.all([
      Contact.find().sort({ createdAt: -1 }).skip(skip).limit(limit).select('-__v'),
      Contact.countDocuments(),
    ]);

    return res.json({
      success: true,
      data: messages,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// GET /api/contact/:id
router.get('/:id', requireAdmin, param('id').isMongoId().withMessage('Invalid ID'), async (req, res) => {
  if (req.dbUnavailable) return res.status(404).json({ success: false, message: 'Not found' });
  try {
    const msg = await Contact.findById(req.params.id).select('-ipAddress');
    if (!msg) return res.status(404).json({ success: false, message: 'Message not found.' });
    return res.json({ success: true, data: msg });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// PATCH /api/contact/:id/status
router.patch('/:id/status', requireAdmin, param('id').isMongoId().withMessage('Invalid ID'), async (req, res) => {
  if (req.dbUnavailable) return res.status(503).json({ success: false, message: 'Database offline' });
  try {
    const msg = await Contact.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!msg) return res.status(404).json({ success: false, message: 'Not found' });
    return res.json({ success: true, data: msg });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
