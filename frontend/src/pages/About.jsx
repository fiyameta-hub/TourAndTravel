import { FaMountain, FaUsers, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Fiya Tours</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the world with our expert guides and unforgettable experiences
        </p>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              <FaMountain />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
            <p className="text-gray-600">Our professional guides are passionate about sharing their knowledge and love for adventure.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
            <p className="text-gray-600">Enjoy personalized experiences with our small group tours that never feel crowded.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Travel</h3>
            <p className="text-gray-600">We're committed to responsible tourism that benefits local communities and preserves nature.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="mb-4 text-gray-700">
            Founded in 2023, Fiya Tours was born from a simple idea: to create extraordinary travel experiences that go beyond the ordinary. 
            What started as a small team of travel enthusiasts has grown into a leading tour operator known for our exceptional service and 
            unforgettable adventures.
          </p>
          <p className="text-gray-700">
            We believe that travel has the power to change lives, broaden perspectives, and create lasting memories. That's why we carefully 
            design each tour to provide authentic experiences that connect you with the heart and soul of each destination.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To inspire and enable people to experience the world's cultural and natural wonders while creating positive impacts through sustainable tourism.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Authentic Experiences</li>
              <li>Sustainable Travel</li>
              <li>Exceptional Service</li>
              <li>Local Community Support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;