const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },

  dob: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  age: { type: Number, required: true },
  blood_group: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  abhaAccount: {
    address: { type: String, required: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
  },
  digiLocker: {
    aadhaarNumber: { type: Number, required: true },
    accessToken: { type: String, required: true },
  },
  remainders: {
    type: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true }
      }
    ], default: []
  },
  appoinments: {
    type: [
      {
        doctorName: { type: String, required: true },
        date: { type: Date, required: true },
        hospitalName: { type: String, required: true },
        speciality: { type: String, required: true },
        purpose: { type: String, required: true },
      }
    ],
    default: []
  },
  records: {
    type: [
      {
        title: { type: String, required: true },
        hospitalName: { type: String, required: true },
        date: { type: Date, required: true },
        format: { type: String, required: true },
        category: { type: String, required: true },
        fileUrl: { type: String, required: true },
      }
    ]
    , default: []
  },
  medicineIntake: {
    type: [
      {
        medicineName: { type: String, required: true },
        dosage: { type: String, required: true },
        frequency: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        type: { type: String, required: true },
      }
    ]
  },
  wellbeingapi: {
    source: { type: String, enum: ['google_fit', 'apple_health']},
    accessToken: { type: String, required: true },
    refreshToken: { type: String },
  },

  stats: {
    type: {
      date: { type: Date, required: true },
      reportedMoments: {
        type: {
          type: [
            {
              title: { type: String, required: true },
              time: { type: Date, required: true },
              severity: { type: String, required: true },
            }
          ]
        },
        default: []
      },
      mood: {
        type: String,
        default: 'neutral',
      }
    }
  },
  chats: {
    type: [
      {
        chatId: { type: mongoose.Schema.Types.ObjectId, required: true , ref: 'Chats'},
        doctorName: { type: String, required: true },
      }
    ],
    default: []
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
