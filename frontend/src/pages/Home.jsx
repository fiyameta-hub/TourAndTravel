import { useState, useEffect } from 'react';
import { getTours } from '../services/api';
import TourCard from '../components/TourCard';
import Loader from '../components/Loader';

const Home = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchTours = async () => {
      const data = await getTours();
      setTours(data);
      setLoading(false);
    };
    fetchTours();
  }, []);

  const filteredTours = tours.filter(tour => tour.title.toLowerCase().includes(search.toLowerCase()) || tour.location.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mx-auto pt-20 pb-8 px-4">
      <section className="text-center mb-8 transition-all duration-500 ease-in-out opacity-100 translate-y-0">
        <h1 className="text-4xl font-bold mb-4 transition-all duration-300">Discover Your Next Adventure</h1>
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-2 border border-gray-300 rounded transition-shadow duration-200 focus:shadow-lg"
        />
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 transition-all duration-300">Featured Destinations</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.slice(0, 3).map(tour => <TourCard key={tour.id} tour={tour} />)}
          </div>
        )}
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 transition-all duration-300">Promotional Tours</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.slice(3).map(tour => <TourCard key={tour.id} tour={tour} />)}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;