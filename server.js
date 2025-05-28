const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cloudinary = require('./config/cloudinary');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/user', require('./routes/userProfile.routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
