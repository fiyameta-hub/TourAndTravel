// src/pages/TourDetails.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTourById, createBooking } from '../services/api';
import Loader from '../components/Loader';

const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const data = await getTourById(id);
        setTour(data);
      } catch (err) {
        console.error("Failed to load tour:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);

  const handleBooking = async () => {
    try {
      await createBooking({ tourId: id });
      alert('Booking successful! 🎉');
    } catch (e) {
      if (e.message?.includes('Unauthorized') || e.message?.includes('login')) {
        alert('Please log in to book this tour.');
      } else {
        alert('Booking failed. Please try again.');
      }
    }
  };

  if (loading) return <Loader />;
  if (!tour) return <p className="text-center text-red-500 text-xl">Tour not found.</p>;

  return (
    <div className="container mx-auto pt-20 pb-12 px-4">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="space-y-4">
          <img
            src={`/images/tours/${tour.images[0]}`}
            alt={tour.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-3 gap-2">
            {tour.images.slice(1, 4).map((img, i) => (
              <img
                key={i}
                src={`/images/tours/${img}`}
                alt={`${tour.name} ${i + 2}`}
                className="h-32 object-cover rounded cursor-pointer hover:opacity-80 transition"
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{tour.name}</h1>
          <p className="text-gray-600 text-lg mb-4">{tour.summary}</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6 space-y-3">
            <div className="flex justify-between">
              <span className="font-semibold">Duration:</span>
              <span>{tour.duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Difficulty:</span>
              <span className={`font-medium ${tour.difficulty === 'Difficult' ? 'text-red-600' : tour.difficulty === 'Medium' ? 'text-yellow-600' : 'text-green-600'}`}>
                {tour.difficulty}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Group Size:</span>
              <span>Up to {tour.maxGroupSize} people</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Rating:</span>
              <span>⭐ {tour.ratingsAverage} ({tour.ratingsQuantity} reviews)</span>
            </div>
            <div className="text-3xl font-bold text-blue-600 mt-4">
              ${tour.price.toLocaleString()}
              <span className="text-lg text-gray-500 font-normal"> / person</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{tour.description}</p>

          <button
            onClick={handleBooking}
            className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
          >
            Book This Tour Now
          </button>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Available Start Dates</h3>
            <div className="flex flex-wrap gap-3">
              {tour.startDates.map((date, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {new Date(date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;