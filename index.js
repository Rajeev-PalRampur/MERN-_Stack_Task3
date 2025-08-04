const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mern_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// ✅ Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// ✅ Create a new user
app.post('/api/users', async (req, res) => {
  try {
    console.log('Received data:', req.body);  // 🔍 Add this
    const { name, email, age, role } = req.body;
    const user = new User({ name, email, age, role });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);  // 🔍 Will print exact issue
    res.status(500).json({ error: 'Failed to create user' });
  }
});
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
