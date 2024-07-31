// server/middleware/auth.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const checkAdmin = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user || user.role !== 'admin') {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(403).send({ error: 'Please authenticate as admin.' });
  }
};

module.exports = { checkAdmin };
