const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  otpConstraint: { type: String, required: true }, 
  otp: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now, expires: 1800 } 
});

module.exports = mongoose.model('Otp', otpSchema);
