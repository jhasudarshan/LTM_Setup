const cloudinary = require('../config/cloudinary');
const UserProfile = require('../models/UserProfile');
const fs = require('fs');

exports.uploadProfile = async (req, res) => {
  try {
    const { stream, areaOfInterest, projects, workExperience, links } = req.body;
    const file = req.file;

    const cloudRes = await cloudinary.uploader.upload(file.path, {
      resource_type: 'auto',
    });

    const userProfile = new UserProfile({
      stream,
      areaOfInterest,
      semesterResult: cloudRes.secure_url,
      projects: JSON.parse(projects),
      workExperience,
      links: JSON.parse(links),
    });

    await userProfile.save();
    fs.unlinkSync(file.path); // clean up local upload
    res.status(201).json({ success: true, userProfile });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};