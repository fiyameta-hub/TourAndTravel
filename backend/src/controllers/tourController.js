const Tour = require('../models/Tour');

exports.getAllTours = (req, res) => {
  res.json(Tour.findAll());
};

exports.getTourById = (req, res) => {
  const tour = Tour.findById(req.params.id);
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).send('Tour not found');
  }
};
