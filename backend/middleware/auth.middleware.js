const requireAuth = (req, res, next) => {
//   if (!currentUser) {
//     return res.status(401).json({ message: 'Please login to continue' });
//   }
// //   req.user = currentUser;
  next();
};

module.exports = requireAuth