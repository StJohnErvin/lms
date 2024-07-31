const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers
}));
app.use(bodyParser.json());

// MongoDB Atlas connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if no server is available
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
  useNewUrlParser: true, // Deprecated option, remove this line
  useUnifiedTopology: true, // Deprecated option, remove this line
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Routes
const examRoutes = require('./routes/exams');
app.use('/api/exams', examRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
