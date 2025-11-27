let bookings = [];
let currentBookingId = 1;

const Booking = {
  create: ({ userId, tourId }) => {
    const newBooking = {
      id: currentBookingId++,
      userId: parseInt(userId),
      tourId: parseInt(tourId),
      bookingDate: new Date(),
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    bookings.push(newBooking);
    return newBooking;
  },
  findByUserId: (userId) => bookings.filter(booking => booking.userId === parseInt(userId)),
  findByTourId: (tourId) => bookings.filter(booking => booking.tourId === parseInt(tourId))
};

module.exports = Booking;
