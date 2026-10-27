/**
 * Portfolio Backend — Express Server
 * Anand Narayan Dwivedi — Full Stack Developer Portfolio
 */

'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact');
const socialRoutes = require('./routes/social');
const resumeRoutes = require('./routes/resume');
const projectRoutes = require('./routes/projects');
const educationRoutes = require('./routes/education');
const certRoutes = require('./routes/certifications');
const skillRoutes = require('./routes/skills');

const app = express();
const PORT = process.env.PORT || 3001;

// Trust proxy for rate limiting when behind Vercel, Render, or reverse proxy
app.set('trust proxy', 1);

// ─── CORS ────────────────────────────────────────────────────────────────────
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    // Allow any localhost / 127.0.0.1 on any port (3000, 3001, 3002, 5173, 5500, etc.)
    if (/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }
    // Allow Vercel preview & production deployments
    if (origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }
    if (process.env.CORS_ORIGIN && origin === process.env.CORS_ORIGIN) {
      return callback(null, true);
    }
    return callback(null, true); // Dev-friendly fallback
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-admin-key'],
}));

// ─── Security Headers ─────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// ─── Serve Static Frontend (Prioritized) ──────────────────────────────────────
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

// Parse JSON bodies for API requests
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: false, limit: '100kb' }));

// ─── Rate Limiting ────────────────────────────────────────────────────────────
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  validate: { trustProxy: false },
  message: { success: false, message: 'Too many requests. Please try again later.' },
});

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  validate: { trustProxy: false },
  message: { success: false, message: 'Too many messages sent. Please wait a few minutes.' },
});

// ─── Serverless-Safe Database Middleware for /api Routes ─────────────────────
// Only invokes connectDB on /api routes, never blocks static asset delivery
app.use('/api', async (req, res, next) => {
  try {
    await connectDB();
    req.dbUnavailable = false;
  } catch (err) {
    // If DB is offline or fails, mark as unavailable so route handlers can serve resilient static fallbacks
    req.dbUnavailable = true;
  }
  next();
});

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  const dbState = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  const dbStatus = dbState[mongoose.connection.readyState] || 'disconnected';

  return res.json({
    success: true,
    status: 'ok',
    timestamp: new Date().toISOString(),
    server: `Portfolio Express API on port ${PORT}`,
    database: {
      status: dbStatus,
      name: mongoose.connection.name || 'N/A',
      host: mongoose.connection.host || 'N/A',
    },
  });
});

// ─── API Routes ──────────────────────────────────────────────────────────────
app.use('/api/contact', apiLimiter, contactLimiter, contactRoutes);
app.use('/api/social', apiLimiter, socialRoutes);
app.use('/api/resume', apiLimiter, resumeRoutes);
app.use('/api/projects', apiLimiter, projectRoutes);
app.use('/api/education', apiLimiter, educationRoutes);
app.use('/api/certifications', apiLimiter, certRoutes);
app.use('/api/skills', apiLimiter, skillRoutes);

// 404 for unmatched API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ success: false, message: `API route not found: ${req.path}` });
});

// ─── Page Routes ──────────────────────────────────────────────────────────────
app.get('/admin', (req, res) => {
  res.sendFile(path.join(publicPath, 'admin.html'));
});

// Catch-all: serve index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// ─── Error Handler ────────────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error('Unhandled server error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred.' : err.message,
  });
});

// ─── Server Startup ───────────────────────────────────────────────────────────
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log('');
    console.log('╔══════════════════════════════════════════════╗');
    console.log('║   Anand Narayan Dwivedi — Developer Portfolio║');
    console.log('╚══════════════════════════════════════════════╝');
    console.log(`🚀  Portfolio URL:   http://localhost:${PORT}`);
    console.log(`🛡️   Admin Panel:     http://localhost:${PORT}/admin`);
    console.log(`📄  Resume Download: http://localhost:${PORT}/api/resume`);
    console.log(`📡  Health Check:    http://localhost:${PORT}/api/health`);
    console.log('');
  });
}

module.exports = app;
