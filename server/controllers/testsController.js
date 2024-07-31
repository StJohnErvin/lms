const Test = require('../models/Test');

// Create a new test
exports.createTest = async (req, res) => {
  const { title, questions } = req.body;
  const createdBy = req.user.id;

  try {
    const newTest = new Test({ title, questions, createdBy });
    const test = await newTest.save();
    res.json(test);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all tests
exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find().populate('createdBy');
    res.json(tests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
