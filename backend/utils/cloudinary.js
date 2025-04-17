// config/cloudinary.config.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'atharwa23', 
    api_key: '733362231616883', 
    api_secret: 'iz65_HsocWd_y2WCa6giDiDJ8Gk'
});

module.exports = cloudinary;
