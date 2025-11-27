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
      const data = await getTourById(id);
      setTour(data);
      setLoading(false);
    };
    fetchTour();
  }, [id]);

  const handleBooking = async () => {
    try {
      await createBooking({ tourId: id });
      alert('Booking successful!');
    } catch (e) {
      if (String(e.message).includes('Unauthorized')) {
        alert('Please login to book this tour.');
      } else {
        alert('Booking failed');
      }
    }
  };

  if (loading) return <Loader />;
  if (!tour) return <p>Tour not found.</p>;

  return (
    <div className="container mx-auto pt-20 pb-8 px-4 transition-all duration-500 ease-in-out opacity-100">
      <h1 className="text-3xl font-bold mb-4 transition-all duration-300">{tour.title}</h1>
      <img src={tour.image} alt={tour.title} className="w-full h-96 object-cover rounded mb-6 transition-opacity duration-300" />
      <p className="text-xl font-semibold mb-2 transition-colors duration-200">${tour.price}</p>
      <p className="mb-4 transition-all duration-200">{tour.description}</p>
      <h2 className="text-2xl font-bold mb-2 transition-all duration-300">Itinerary</h2>
      <ul className="list-disc pl-6 mb-6 transition-all duration-200">
        {tour.itinerary.map((day, index) => <li key={index} className="transition-colors duration-200">{day}</li>)}
      </ul>
      <button onClick={handleBooking} className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors duration-200">
        Book Now
      </button>
    </div>
  );
};

export default TourDetails;