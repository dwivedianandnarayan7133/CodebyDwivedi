/**
 * Comprehensive Database Seed Script
 * Populates MongoDB with all Projects, Education, Certifications, Skills,
 * Social Links, and Resume metadata matching Anand Narayan Dwivedi's resume.
 */

'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('../config/db');
const staticData = require('../config/staticData');

const Project = require('../models/Project');
const Education = require('../models/Education');
const Certification = require('../models/Certification');
const Skill = require('../models/Skill');
const SocialLink = require('../models/SocialLink');
const Resume = require('../models/Resume');
const path = require('path');
const fs = require('fs');

async function seedDatabase() {
  try {
    console.log('Connecting to database...');
    await connectDB();
    console.log('Connected to MongoDB. Seeding data...');

    // 1. Projects
    await Project.deleteMany({});
    const projectDocs = staticData.projects.map(p => ({
      title: p.title,
      subtitle: p.subtitle,
      date: p.date,
      description: p.description,
      features: p.features,
      techStack: p.techStack,
      icon: p.icon,
      category: p.category,
      githubUrl: p.githubUrl,
      liveUrl: p.liveUrl,
      directUrl: p.directUrl || p.liveUrl,
      order: p.order,
      isActive: true,
    }));
    await Project.insertMany(projectDocs);
    console.log(`✅ Seeded ${projectDocs.length} Projects.`);

    // 2. Education
    await Education.deleteMany({});
    const eduDocs = staticData.education.map(e => ({
      degree: e.degree,
      institution: e.institution,
      dateRange: e.dateRange,
      location: e.location,
      description: e.description,
      badgeText: e.badgeText,
      icon: e.icon,
      order: e.order,
      isActive: true,
    }));
    await Education.insertMany(eduDocs);
    console.log(`✅ Seeded ${eduDocs.length} Education items.`);

    // 3. Certifications
    await Certification.deleteMany({});
    const certDocs = staticData.certifications.map(c => ({
      title: c.title,
      issuer: c.issuer,
      date: c.date,
      topics: c.topics,
      description: c.description,
      badgeText: c.badgeText,
      icon: c.icon,
      imageUrl: c.imageUrl || null,
      pdfUrl: c.pdfUrl || null,
      credentialId: c.credentialId || null,
      verifyUrl: c.verifyUrl || null,
      order: c.order,
      isActive: true,
    }));
    await Certification.insertMany(certDocs);
    console.log(`✅ Seeded ${certDocs.length} Certifications.`);

    // 4. Skills
    await Skill.deleteMany({});
    const skillDocs = staticData.skills.map(s => ({
      category: s.category,
      categoryIcon: s.categoryIcon,
      isTag: s.isTag,
      name: s.name,
      icon: s.icon,
      percentage: s.percentage,
      color: s.color,
      order: s.order,
      isActive: true,
    }));
    await Skill.insertMany(skillDocs);
    console.log(`✅ Seeded ${skillDocs.length} Skills.`);

    // 5. Social Links
    await SocialLink.deleteMany({});
    const socialDocs = staticData.social.map(s => ({
      platform: s.platform,
      label: s.label,
      url: s.url,
      username: s.username,
      icon: s.icon,
      colorClass: s.colorClass,
      order: s.order,
      isActive: true,
    }));
    await SocialLink.insertMany(socialDocs);
    console.log(`✅ Seeded ${socialDocs.length} Social Links.`);

    // 6. Resume
    const resumePath = path.join(__dirname, '..', '..', 'public', 'assets', 'resume.pdf');
    if (fs.existsSync(resumePath)) {
      const stats = fs.statSync(resumePath);
      await Resume.deleteMany({});
      await Resume.create({
        originalName: 'Anand_Narayan_Dwivedi_Resume.pdf',
        storedName: 'resume.pdf',
        filePath: resumePath,
        sizeBytes: stats.size,
        sizeMB: parseFloat((stats.size / (1024 * 1024)).toFixed(2)),
        mimeType: 'application/pdf',
        downloadAs: 'Anand_Narayan_Dwivedi_Resume.pdf',
        isActive: true,
      });
      console.log('✅ Seeded active Resume record.');
    }

    console.log('\n🎉 Database seeding completed successfully!\n');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
}

seedDatabase();
