import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
      <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover transition-opacity duration-300" />
      <div className="p-4">
        <h3 className="text-xl font-bold transition-colors duration-200">{tour.title}</h3>
        <p className="text-gray-600 transition-colors duration-200">{tour.location}</p>
        <p className="text-blue-600 font-semibold transition-colors duration-200">${tour.price}</p>
        <p className="text-sm mt-2 transition-colors duration-200">{tour.description.substring(0, 100)}...</p>
        <Link to={`/tours/${tour.id}`} className="mt-4 block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-center transition-colors duration-200">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TourCard;