const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');

const storage = multer.diskStorage({
  destination: './backend/uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

router.post('/upload-profile', upload.single('file'), userController.uploadProfile);

module.exports = router;