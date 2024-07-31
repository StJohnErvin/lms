const Exam = require('../models/Exam');

exports.createExam = async (req, res) => {
  try {
    const exam = new Exam(req.body);
    await exam.save();
    res.status(201).send(exam);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.listExams = async (req, res) => {
  try {
    const exams = await Exam.find({});
    res.status(200).send(exams);
  } catch (error) {
    res.status(500).send(error);
  }
};
