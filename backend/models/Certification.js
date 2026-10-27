'use strict';

const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  issuer: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  topics: [{
    type: String,
    trim: true,
  }],
  icon: {
    type: String,
    default: 'fas fa-certificate',
  },
  imageUrl: {
    type: String,
    trim: true,
    default: null,
  },
  pdfUrl: {
    type: String,
    trim: true,
    default: null,
  },
  credentialId: {
    type: String,
    trim: true,
    default: null,
  },
  verifyUrl: {
    type: String,
    trim: true,
    default: null,
  },
  badgeText: {
    type: String,
    trim: true,
    default: 'Verified',
  },
  order: {
    type: Number,
    default: 99,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Certification', CertificationSchema);
