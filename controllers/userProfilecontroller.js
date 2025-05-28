const UserProfile = require('../models/UserProfile.model');

const createOrUpdateProfile = async (req, res) => {
  try {
    const { userId, academicProfile, extracurricularProfile } = req.body;

    const updated = await UserProfile.findOneAndUpdate(
      { userId },
      {
        $set: {
          academicProfile,
          extracurricularProfile,
          updatedAt: new Date(),
        },
      },
      { new: true, upsert: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const uploadPDF = async (req, res) => {
  try {
    res.status(200).json({ url: req.file.path });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createOrUpdateProfile, uploadPDF };
