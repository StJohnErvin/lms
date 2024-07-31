const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
