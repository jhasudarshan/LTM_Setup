const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'career-platform-docs',
    resource_type: 'raw',
    allowedFormats: ['pdf'],
  },
});

const upload = multer({ storage });
module.exports = upload;
