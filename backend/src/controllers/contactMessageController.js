const ContactMessage = require('../models/ContactMessage');

exports.sendContactMessage = (req, res) => {
  const { name, email, message } = req.body;
  const newContactMessage = ContactMessage.create({ name, email, message });
  res.status(201).json({ message: 'Contact message sent successfully', contactMessage: newContactMessage });
};

exports.getAllContactMessages = (req, res) => {
  const messages = ContactMessage.findAll();
  res.status(200).json(messages);
};
