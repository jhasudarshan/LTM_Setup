const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinary');
const multer = require('multer');
const fs = require('fs');

// Multer setup to handle file uploads
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const filePath = req.file.path;

    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "raw", // since you're uploading PDFs
    });

    // Delete file locally after upload
    fs.unlinkSync(filePath);

    res.status(200).json({
      message: "File uploaded successfully",
      url: result.secure_url,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;