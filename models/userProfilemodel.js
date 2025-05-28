const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },

  academicProfile: {
    semesters: [
      {
        semester: Number,
        subjects: [
          {
            name: String,
            marks: Number,
            totalMarks: Number,
            grade: String,
            grasp: String,
          },
        ],
        documentUrl: String,
      },
    ],
  },

  extracurricularProfile: {
    projects: [
      {
        title: String,
        description: String,
        technologies: [String],
        link: String,
      },
    ],
    internships: [
      {
        company: String,
        role: String,
        duration: String,
        techStack: [String],
        description: String,
      },
    ],
    workExperience: [
      {
        organization: String,
        role: String,
        duration: String,
        description: String,
      },
    ],
  },

  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
