const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB Atlas
mongoose.connect('mongodb://database:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Body parser middleware
app.use(bodyParser.json());

// MongoDB Schema for Skills
const Skill = mongoose.model('Skill', {
  name: String,
  description: String,
});

// MongoDB Schema for Projects
const Project = mongoose.model('Project', {
  name: String,
  techStack: String,
  description: String,
});

// Routes for Skills
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/skills', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newSkill = new Skill({ name, description });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Similar routes can be added for updating and deleting skills

// Routes for Projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const { name, techStack, description } = req.body;
    const newProject = new Project({ name, techStack, description });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Similar routes can be added for updating and deleting projects

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
