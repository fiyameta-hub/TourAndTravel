// src/services/api.js

const API_BASE = 'http://localhost:5000/api';

export const getTours = async () => {
  const res = await fetch(`${API_BASE}/tours`);
  if (!res.ok) throw new Error('Failed to fetch tours');
  return res.json();
};

export const getTourById = async (id) => {
  const res = await fetch(`${API_BASE}/tours/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch tour');
  return res.json();
};

export const registerUser = async ({ name, email, password }) => {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Registration failed');
  return data;
};

export const loginUser = async ({ email, password }) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Login failed');
  return data;
};

export const getCurrentUser = async () => {
  const res = await fetch(`${API_BASE}/auth/me`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.user || null;
};

export const logoutUser = async () => {
  await fetch(`${API_BASE}/auth/logout`, { method: 'POST' });
};

export const createBooking = async ({ tourId }) => {
  const res = await fetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tourId }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Booking failed');
  return data;
};

export const getMyBookings = async () => {
  const res = await fetch(`${API_BASE}/bookings/me`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to load bookings');
  return data;
};

export const sendContact = async ({ name, email, message }) => {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to send');
  return data;
};