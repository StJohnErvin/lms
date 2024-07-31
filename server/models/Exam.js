// models/exam.js

const mongoose = require('mongoose');

// Define the schema for the exam
const examSchema = new mongoose.Schema({
  testName: { type: String, required: true },
  gameType: { type: String, required: true },
  createdBy: { type: String, required: true },
  // Add more fields as needed
});

// Create a Mongoose model based on the schema
const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
