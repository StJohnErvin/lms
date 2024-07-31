const Resource = require('../models/Resource');

// Upload a new resource
exports.uploadResource = async (req, res) => {
  const { title, content } = req.body;
  const uploadedBy = req.user.id;

  try {
    const newResource = new Resource({ title, content, uploadedBy });
    const resource = await newResource.save();
    res.json(resource);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all resources
exports.getResources = async (req, res) => {
  try {
    const resources = await Resource.find().populate('uploadedBy');
    res.json(resources);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
