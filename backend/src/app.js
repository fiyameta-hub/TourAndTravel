const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const contactMessageRoutes = require('./routes/contactMessageRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/api/tours', tourRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contactMessageRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
