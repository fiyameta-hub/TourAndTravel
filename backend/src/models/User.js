let users = [];
let currentUserId = 1;

const User = {
  create: ({ name, email, password }) => {
    const newUser = {
      id: currentUserId++,
      name,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    users.push(newUser);
    return newUser;
  },
  findByEmail: (email) => users.find(user => user.email === email),
  findById: (id) => users.find(user => user.id === parseInt(id))
};

module.exports = User;
