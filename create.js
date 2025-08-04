const mongoose = require('mongoose'); // Only ONCE
const User = require('../models/user'); // Make sure filename is user.js (lowercase)

mongoose.connect('mongodb://localhost:27017/mern_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const user = new User({
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  role: "user"
});

user.save().then(() => {
  console.log("User created");
  mongoose.disconnect();
}).catch(err => {
  console.error("Error saving user:", err);
});
