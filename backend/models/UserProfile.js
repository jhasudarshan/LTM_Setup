const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  stream: String,
  areaOfInterest: String,
  semesterResult: {
    type: String, // store Cloudinary file URL
  },
  projects: [String],
  workExperience: String,
  links: [String],
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', userProfileSchema);