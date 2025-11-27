const tours = require('../../../frontend/src/data/tours.json');

const Tour = {
  findAll: () => tours,
  findById: (id) => tours.find(tour => tour.id === parseInt(id))
};

module.exports = Tour;
