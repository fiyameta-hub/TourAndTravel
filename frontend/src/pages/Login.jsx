import { useState } from 'react';
import { loginUser } from '../services/api';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        await loginUser(formData);
        alert('Logged in successfully');
      } catch (err) {
        alert('Login failed');
      }
    })();
  };

  return (
    <div className="container mx-auto pt-20 pb-8 px-4 max-w-md transition-all duration-500 ease-in-out opacity-100 translate-y-0">
      <h1 className="text-3xl font-bold mb-6 transition-all duration-300">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded transition-shadow duration-200 focus:shadow-lg"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded transition-shadow duration-200 focus:shadow-lg"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;