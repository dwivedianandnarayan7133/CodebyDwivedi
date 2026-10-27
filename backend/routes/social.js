'use strict';

const express = require('express');
const { body, validationResult } = require('express-validator');
const SocialLink = require('../models/SocialLink');
const staticData = require('../config/staticData');

const router = express.Router();

function requireAdmin(req, res, next) {
  const key = req.headers['x-admin-key'];
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized.' });
  }
  next();
}

const linkValidation = [
  body('platform').trim().notEmpty().withMessage('Platform is required').isLength({ max: 50 }),
  body('label').trim().notEmpty().withMessage('Label is required').isLength({ max: 60 }),
  body('url')
    .trim()
    .notEmpty().withMessage('URL is required')
    .custom((val) => {
      if (val.startsWith('mailto:') || val.startsWith('tel:') || /^https?:\/\//i.test(val)) {
        return true;
      }
      throw new Error('Must be a valid URL, mailto:, or tel: link');
    }),
  body('username').optional().trim().isLength({ max: 100 }),
  body('icon').optional().trim().isLength({ max: 80 }),
  body('colorClass').optional().trim().isLength({ max: 40 }),
  body('order').optional().isInt({ min: 0 }).withMessage('Order must be a non-negative integer'),
];

// Public: GET active social links
router.get('/', async (req, res) => {
  try {
    if (req.dbUnavailable) {
      return res.json({ success: true, count: staticData.social.length, data: staticData.social });
    }
    const links = await SocialLink.find({ isActive: true })
      .sort({ order: 1, createdAt: 1 })
      .select('-__v');
    if (!links || links.length === 0) {
      return res.json({ success: true, count: staticData.social.length, data: staticData.social });
    }
    return res.json({ success: true, count: links.length, data: links });
  } catch (err) {
    return res.json({ success: true, count: staticData.social.length, data: staticData.social });
  }
});

// Admin: GET all
router.get('/all', requireAdmin, async (req, res) => {
  try {
    if (req.dbUnavailable) {
      return res.json({ success: true, count: staticData.social.length, data: staticData.social });
    }
    const links = await SocialLink.find().sort({ order: 1 }).select('-__v');
    return res.json({ success: true, count: links.length, data: links });
  } catch (err) {
    return res.json({ success: true, count: staticData.social.length, data: staticData.social });
  }
});

// Admin: POST
router.post('/', requireAdmin, linkValidation, async (req, res) => {
  if (req.dbUnavailable) {
    return res.status(503).json({ success: false, message: 'Database is currently offline.' });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: 'Validation failed.',
      errors: errors.array().map(e => ({ field: e.path, message: e.msg })),
    });
  }

  try {
    const { platform, label, url, username, icon, colorClass, order } = req.body;
    const link = await SocialLink.create({
      platform,
      label,
      url,
      username: username || '',
      icon: icon || 'fas fa-link',
      colorClass: colorClass || 'default',
      order: order ?? 99,
    });
    return res.status(201).json({ success: true, data: link });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: PUT update
router.put('/:id', requireAdmin, linkValidation, async (req, res) => {
  if (req.dbUnavailable) {
    return res.status(503).json({ success: false, message: 'Database is currently offline.' });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }
  try {
    const link = await SocialLink.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!link) return res.status(404).json({ success: false, message: 'Not found' });
    return res.json({ success: true, data: link });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: PATCH toggle
router.patch('/:id/toggle', requireAdmin, async (req, res) => {
  if (req.dbUnavailable) {
    return res.status(503).json({ success: false, message: 'Database is currently offline.' });
  }
  try {
    const link = await SocialLink.findById(req.params.id);
    if (!link) return res.status(404).json({ success: false, message: 'Not found' });
    link.isActive = !link.isActive;
    await link.save();
    return res.json({ success: true, data: link });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: DELETE
router.delete('/:id', requireAdmin, async (req, res) => {
  if (req.dbUnavailable) {
    return res.status(503).json({ success: false, message: 'Database is currently offline.' });
  }
  try {
    const link = await SocialLink.findByIdAndDelete(req.params.id);
    if (!link) return res.status(404).json({ success: false, message: 'Not found' });
    return res.json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
