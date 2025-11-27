let contactMessages = [];
let currentContactMessageId = 1;

const ContactMessage = {
  create: ({ name, email, message }) => {
    const newContactMessage = {
      id: currentContactMessageId++,
      name,
      email,
      message,
      sentAt: new Date(),
      status: 'new'
    };
    contactMessages.push(newContactMessage);
    return newContactMessage;
  },
  findAll: () => contactMessages,
  findById: (id) => contactMessages.find(msg => msg.id === parseInt(id))
};

module.exports = ContactMessage;
