const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: String,
      answer: String,
    },
  ],
});

module.exports = mongoose.model('Test', TestSchema);
