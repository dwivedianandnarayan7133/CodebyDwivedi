'use strict';

const express = require('express');
const Certification = require('../models/Certification');
const staticData = require('../config/staticData');
const router = express.Router();

function requireAdmin(req, res, next) {
  const key = req.headers['x-admin-key'];
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized.' });
  }
  next();
}

// Public: GET active certifications
router.get('/', async (req, res) => {
  try {
    if (req.dbUnavailable) {
      return res.json({ success: true, count: staticData.certifications.length, data: staticData.certifications });
    }
    const data = await Certification.find({ isActive: true }).sort({ order: 1, createdAt: 1 });
    if (!data || data.length === 0) {
      return res.json({ success: true, count: staticData.certifications.length, data: staticData.certifications });
    }
    res.json({ success: true, count: data.length, data });
  } catch (err) {
    res.json({ success: true, count: staticData.certifications.length, data: staticData.certifications });
  }
});

// Admin: GET all
router.get('/all', requireAdmin, async (req, res) => {
  try {
    if (req.dbUnavailable) {
      return res.json({ success: true, count: staticData.certifications.length, data: staticData.certifications });
    }
    const data = await Certification.find().sort({ order: 1, createdAt: 1 });
    res.json({ success: true, count: data.length, data });
  } catch (err) {
    res.json({ success: true, count: staticData.certifications.length, data: staticData.certifications });
  }
});

// Admin: POST new
router.post('/', requireAdmin, async (req, res) => {
  if (req.dbUnavailable) {
    return res.status(503).json({ success: false, message: 'Database is currently offline.' });
  }
  try {
    const data = await Certification.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: PUT update
router.put('/:id', requireAdmin, async (req, res) => {
  if (req.dbUnavailable) {
    return res.status(503).json({ success: false, message: 'Database is currently offline.' });
  }
  try {
    const data = await Certification.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!data) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: PATCH toggle status
router.patch('/:id/toggle', requireAdmin, async (req, res) => {
  if (req.dbUnavailable) {
    return res.status(503).json({ success: false, message: 'Database is currently offline.' });
  }
  try {
    const data = await Certification.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Not found' });
    data.isActive = !data.isActive;
    await data.save();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: DELETE
router.delete('/:id', requireAdmin, async (req, res) => {
  if (req.dbUnavailable) {
    return res.status(503).json({ success: false, message: 'Database is currently offline.' });
  }
  try {
    const data = await Certification.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
