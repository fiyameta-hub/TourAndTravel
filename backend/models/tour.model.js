const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  description: String,
  duration: String,
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Difficult'] },
  price: { type: Number, required: true },
  maxGroupSize: Number,
  ratingsAverage: { type: Number, default: 4.5 },
  ratingsQuantity: { type: Number, default: 0 },
  images: [String],
  startDates: [Date],
  featured: { type: Boolean, default: false }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;