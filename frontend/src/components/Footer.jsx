const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 TravelCo. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;