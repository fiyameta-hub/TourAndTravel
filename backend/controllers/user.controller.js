const User = require('../models/user.model.js')

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    currentUser = user;
    res.json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    user = new User({ name, email, password: await bcrypt.hash(password, salt) });
    await user.save();

    currentUser = user;
    res.json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCurrentUser = (req, res) => {
  if (!currentUser) return res.status(401).json({ message: 'Not logged in' });
  res.json({
    user: { id: currentUser._id, name: currentUser.name, email: currentUser.email, role: currentUser.role }
  });
};

const logout = (req, res) => {
  currentUser = null;
  res.json({ message: 'Logged out' });
};

