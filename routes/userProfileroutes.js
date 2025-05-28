const express = require('express');
const router = express.Router();
const { createOrUpdateProfile, uploadPDF } = require('../controllers/userProfile.controller');
const upload = require('../middleware/upload.middleware');

router.post('/upload-doc', upload.single('document'), uploadPDF);
router.post('/update', createOrUpdateProfile);

module.exports = router;
