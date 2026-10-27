'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');

const Resume = require('../models/Resume');
const { upload } = require('../middleware/upload');

const router = express.Router();

function requireAdmin(req, res, next) {
  const key = req.headers['x-admin-key'];
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized.' });
  }
  next();
}

const STATIC_RESUME_PATH = path.join(__dirname, '..', '..', 'public', 'assets', 'resume.pdf');

// Helper to get static resume info
function getStaticResumeInfo() {
  if (fs.existsSync(STATIC_RESUME_PATH)) {
    const stats = fs.statSync(STATIC_RESUME_PATH);
    return {
      originalName: 'Anand_Narayan_Dwivedi_Resume.pdf',
      downloadAs: 'Anand_Narayan_Dwivedi_Resume.pdf',
      sizeBytes: stats.size,
      sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
      uploadedAt: stats.mtime,
      isPermanent: true
    };
  }
  return null;
}

// GET /api/resume/info — returns metadata
router.get('/info', async (req, res) => {
  try {
    let resume = null;
    if (!req.dbUnavailable) {
      resume = await Resume.findOne({ isActive: true }).sort({ uploadedAt: -1 });
    }

    if (resume) {
      return res.json({
        success: true,
        data: {
          originalName: resume.originalName,
          downloadAs: resume.downloadAs,
          sizeBytes: resume.sizeBytes,
          sizeMB: resume.sizeMB,
          uploadedAt: resume.uploadedAt,
        },
      });
    }

    const staticInfo = getStaticResumeInfo();
    if (staticInfo) {
      return res.json({ success: true, data: staticInfo });
    }

    return res.status(404).json({ success: false, message: 'No resume uploaded yet.' });
  } catch (err) {
    const staticInfo = getStaticResumeInfo();
    if (staticInfo) {
      return res.json({ success: true, data: staticInfo });
    }
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// GET /api/resume — stream/download active resume
router.get('/', async (req, res) => {
  try {
    let targetPath = null;
    let downloadAs = 'Anand_Narayan_Dwivedi_Resume.pdf';
    let sizeBytes = 0;

    if (!req.dbUnavailable) {
      const resume = await Resume.findOne({ isActive: true }).sort({ uploadedAt: -1 });
      if (resume && resume.filePath && fs.existsSync(resume.filePath)) {
        targetPath = resume.filePath;
        downloadAs = resume.downloadAs || 'Anand_Narayan_Dwivedi_Resume.pdf';
        sizeBytes = resume.sizeBytes;
      }
    }

    if (!targetPath && fs.existsSync(STATIC_RESUME_PATH)) {
      targetPath = STATIC_RESUME_PATH;
      const stats = fs.statSync(STATIC_RESUME_PATH);
      sizeBytes = stats.size;
    }

    if (!targetPath) {
      return res.status(404).json({ success: false, message: 'Resume file not found.' });
    }

    res.setHeader('Content-Disposition', `attachment; filename="${downloadAs}"`);
    res.setHeader('Content-Type', 'application/pdf');
    if (sizeBytes > 0) {
      res.setHeader('Content-Length', sizeBytes);
    }

    const fileStream = fs.createReadStream(targetPath);
    fileStream.pipe(res);

    fileStream.on('error', (err) => {
      console.error('Resume stream error:', err.message);
      if (!res.headersSent) {
        res.status(500).json({ success: false, message: 'Error streaming file.' });
      }
    });

  } catch (err) {
    console.error('Resume download error:', err.message);
    if (fs.existsSync(STATIC_RESUME_PATH)) {
      res.setHeader('Content-Disposition', 'attachment; filename="Anand_Narayan_Dwivedi_Resume.pdf"');
      res.setHeader('Content-Type', 'application/pdf');
      return fs.createReadStream(STATIC_RESUME_PATH).pipe(res);
    }
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// POST /api/resume — admin upload new PDF
router.post('/', requireAdmin, (req, res) => {
  upload.single('resume')(req, res, async (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({ success: false, message: 'File too large. Maximum size is 5 MB.' });
      }
      return res.status(400).json({ success: false, message: err.message || 'Upload failed.' });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded.' });
    }

    try {
      // Also copy to public/assets/resume.pdf so it is permanently updated!
      try {
        fs.copyFileSync(req.file.path, STATIC_RESUME_PATH);
      } catch (copyErr) {
        console.warn('Could not update static resume copy:', copyErr.message);
      }

      if (!req.dbUnavailable) {
        await Resume.updateMany({}, { isActive: false });
        const sizeMB = (req.file.size / (1024 * 1024)).toFixed(2);
        const resume = await Resume.create({
          originalName: req.file.originalname,
          storedName: req.file.filename,
          filePath: req.file.path,
          sizeBytes: req.file.size,
          sizeMB: parseFloat(sizeMB),
          mimeType: req.file.mimetype,
          downloadAs: 'Anand_Narayan_Dwivedi_Resume.pdf',
          isActive: true,
        });
        return res.status(201).json({ success: true, message: 'Resume uploaded and set active.', data: resume });
      }

      return res.status(201).json({ success: true, message: 'Resume updated permanently.' });
    } catch (saveErr) {
      return res.status(500).json({ success: false, message: saveErr.message });
    }
  });
});

module.exports = router;
