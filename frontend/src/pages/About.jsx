import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent!');
  };

  return (
    <div className="container mx-auto pt-20 pb-8 px-4 max-w-md transition-all duration-500 ease-in-out opacity-100 translate-y-0">
      <h1 className="text-3xl font-bold mb-6 transition-all duration-300">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded transition-shadow duration-200 focus:shadow-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded transition-shadow duration-200 focus:shadow-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded h-32 transition-shadow duration-200 focus:shadow-lg"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;