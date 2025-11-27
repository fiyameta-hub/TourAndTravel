import { useState, useEffect } from 'react';
import { getTours } from '../services/api';
import TourCard from '../components/TourCard';
import Loader from '../components/Loader';

const Destinations = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      const data = await getTours();
      setTours(data);
      setLoading(false);
    };
    fetchTours();
  }, []);

  return (
    <div className="container mx-auto pt-20 pb-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Destinations</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map(tour => <TourCard key={tour.id} tour={tour} />)}
        </div>
      )}
    </div>
  );
};

export default Destinations;