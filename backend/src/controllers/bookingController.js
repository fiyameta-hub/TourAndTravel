const Booking = require('../models/Booking');

exports.createBooking = (req, res) => {
  // In a real app, userId would come from authenticated user
  const { tourId, userId } = req.body; 
  
  if (!userId) {
    return res.status(401).send('Unauthorized: User ID is required.');
  }

  const newBooking = Booking.create({ userId, tourId });
  res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
};

exports.getBookingsByUser = (req, res) => {
  const { userId } = req.params;
  const userBookings = Booking.findByUserId(userId);
  res.status(200).json(userBookings);
};
