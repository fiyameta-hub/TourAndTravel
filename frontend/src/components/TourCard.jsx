// src/components/TourCard.jsx
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {  // ← Make sure you receive "tour" as prop!
  if (!tour) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
      <img
        src={`/images/tours/${tour.images[0]}`}
        alt={tour.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
        <p className="text-gray-600 mb-3 line-clamp-2">{tour.summary}</p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-blue-600">
            ${tour.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">{tour.duration}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-green-600">
            {tour.ratingsAverage} ({tour.ratingsQuantity} reviews)
          </span>
          <Link
            to={`/tours/${tour._id}`}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;