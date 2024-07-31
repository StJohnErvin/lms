// routes/exams.js (or similar)
const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam'); // Assuming you have a model for exams

// POST /api/exams/create - Create a new exam
router.post('/create', async (req, res) => {
  try {
    const { testName, gameType, createdBy } = req.body; // Assuming these are the fields expected in the request body
    
    // Create a new exam instance
    const newExam = new Exam({
      testName,
      gameType,
      createdBy,
    });

    // Save the exam to MongoDB
    const savedExam = await newExam.save();

    res.status(201).json(savedExam);
  } catch (error) {
    console.error('Error creating exam:', error);
    res.status(500).json({ message: 'Failed to create exam' });
  }
});

// GET /api/exams/list - Fetch all exams
router.get('/list', async (req, res) => {
    try {
      const exams = await Exam.find(); // Assuming Exam.find() fetches all exams from MongoDB
      res.json(exams);
    } catch (error) {
      console.error('Error fetching exams:', error);
      res.status(500).json({ message: 'Failed to fetch exams' });
    }
  });

module.exports = router;
