const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://database:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

// Body parser middleware
app.use(bodyParser.json());

// Routes
app.get('/api/skills', (req, res) => {
  // Fetch skills from the database
  // You'll need to define a Skill model using Mongoose
  // and query the database to get the skills
  res.json([{ id: 1, name: 'React', description: 'JavaScript library for building user interfaces' }]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
