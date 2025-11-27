const User = require('../models/User');

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (User.findByEmail(email)) {
    return res.status(400).send('User with that email already exists');
  }

  const newUser = User.create({ name, email, password });
  // In a real application, you would hash the password here
  // and generate a JWT for authentication.
  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = User.findByEmail(email);

  if (!user || user.password !== password) {
    return res.status(400).send('Invalid credentials');
  }

  // In a real application, you would generate a JWT here.
  res.status(200).json({ message: 'Logged in successfully', user: user, token: 'dummy-token' });
};
