const Grade = require('../models/grade');

// Function to create a grade
exports.createGrade = async (req, res) => {
  try {
    const grade = new Grade(req.body);
    await grade.save();
    res.status(201).send(grade);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Function to list all grades
exports.listGrades = async (req, res) => {
  try {
    const grades = await Grade.find({});
    res.status(200).send(grades);
  } catch (error) {
    res.status(500).send(error);
  }
};
