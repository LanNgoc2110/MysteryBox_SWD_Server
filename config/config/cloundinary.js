const cloudinary = require("cloudinary").v2;
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUND_NAME,
  api_key: process.env.API_CLOUND_KEY,
  api_secret: process.env.API_CLOUND_SECRET, // Click 'View Credentials' below to copy your API secret
});

module.exports = cloudinary;
