import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="bg-blue-600 text-white p-4 fixed w-full z-10 shadow-md transition-all duration-300 ease-in-out transform translate-y-0"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TravelCo</Link>
        <ul className="flex space-x-4 md:space-x-6">
          <li><Link to="/" className="hover:underline transition-colors duration-200">Home</Link></li>
          <li><Link to="/destinations" className="hover:underline transition-colors duration-200">Destinations</Link></li>
          <li><Link to="/about" className="hover:underline transition-colors duration-200">About</Link></li>
          <li><Link to="/contact" className="hover:underline transition-colors duration-200">Contact</Link></li>
          <li><Link to="/login" className="hover:underline transition-colors duration-200">Login</Link></li>
          <li><Link to="/register" className="hover:underline transition-colors duration-200">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;