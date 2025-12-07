const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
// const bcrypt = require('bcryptjs');
const { mockTours } = require('./mockData.js'); // Add this line near the top
const Tour = require('./models/tour.model.js');

// const productRoute = require('./routes/product.route.js')
const tourRoute = require('./routes/tour.route.js')

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tourapp'


const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
  origin: 'http://localhost:5173', // Your React app
  credentials: true
}));

//routes
app.use('/api/tours', tourRoute);

// === SEED ROUTE (Add this back!) ===
// === SEED ROUTE ===
app.get('/api/seed', async (req, res) => {
  try {
    await Tour.deleteMany({});
    console.log('Cleared old tours');

    const tours = await Tour.insertMany(
      mockTours.map(t => ({
        ...t,
        startDates: t.startDates.map(d => new Date(d))
      }))
    );

    res.json({ 
      message: 'Database seeded successfully!', 
      count: tours.length 
    });
  } catch (err) {
    console.error('Seeding error:', err);
    res.status(500).json({ 
      message: 'Seeding failed', 
      error: err.message 
    });
  }
});


mongoose.connect(MONGO_URI)
  .then(() => {console.log('Connected!');
    app.listen(PORT, () => {
        console.log('server is running on port 5000');
    })
})
  .catch(() => console.log('Failed to connect!'));











// let currentUser = null; // Holds the logged-in user object

// // Register
// app.post('/api/auth/register', );

// // Login
// app.post('/api/auth/login', );

// // Get Current User (for frontend to check login state)
// app.get('/api/auth/me', );

// // Logout
// app.post('/api/auth/logout', );



// // === PROTECTED ROUTE MIDDLEWARE (Simple) ===
// const requireAuth = (req, res, next) => {
//   if (!currentUser) {
//     return res.status(401).json({ message: 'Please login to continue' });
//   }
//   req.user = currentUser;
//   next();
// };



// // Create Booking
// app.post('/api/bookings', requireAuth, async (req, res) => {
//   const { tourId } = req.body;
//   try {
//     const booking = await Booking.create({
//       tour: tourId,
//       user: req.user._id
//     });
//     await booking.populate('tour');
//     res.status(201).json(booking);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Get My Bookings
// app.get('/api/bookings/me', requireAuth, async (req, res) => {
//   const bookings = await Booking.find({ user: req.user._id })
//     .populate('tour')
//     .sort('-bookedAt');
//   res.json(bookings);
// });

// // Contact Form
// app.post('/api/contact', async (req, res) => {
//   console.log('Contact Form:', req.body);
//   res.json({ message: 'Thank you! We will get back to you soon.' });
// });

// // Seed Data
// app.get('/api/seed', async (req, res) => {
//   await Tour.deleteMany({});
//   const { mockTours } = require('../mockData.js');
//   const tours = await Tour.insertMany(
//     mockTours.map(t => ({
//       ...t,
//       startDates: t.startDates.map(d => new Date(d))
//     }))
//   );
//   res.json({ message: 'Seeded', count: tours.length });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });