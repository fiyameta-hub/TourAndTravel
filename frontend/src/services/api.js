const tokenKey = 'token';

const getToken = () => localStorage.getItem(tokenKey);
export const setToken = (t) => localStorage.setItem(tokenKey, t);
export const clearToken = () => localStorage.removeItem(tokenKey);

export const getTours = async () => {
  const res = await fetch('/api/tours');
  if (!res.ok) throw new Error('Failed to fetch tours');
  return res.json();
};

export const getTourById = async (id) => {
  const res = await fetch(`/api/tours/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch tour');
  return res.json();
};

export const createBooking = async ({ tourId }) => {
  const res = await fetch('/api/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken() || ''}`,
    },
    body: JSON.stringify({ tourId, userId: 1 }), // TODO: Replace with actual userId from authenticated user
  });
  if (res.status === 401) throw new Error('Unauthorized');
  if (!res.ok) throw new Error('Failed to create booking');
  return res.json();
};

export const getMyBookings = async () => {
  const userId = 1; // TODO: Replace with actual userId from authenticated user
  const res = await fetch(`/api/bookings/user/${userId}`, {
    headers: { 'Authorization': `Bearer ${getToken() || ''}` },
  });
  if (res.status === 401) throw new Error('Unauthorized');
  if (!res.ok) throw new Error('Failed to fetch bookings');
  return res.json();
};

export const registerUser = async ({ name, email, password }) => {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) throw new Error('Registration failed');
  const data = await res.json();
  if (data.token) setToken(data.token);
  return data;
};

export const loginUser = async ({ email, password }) => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  const data = await res.json();
  if (data.token) setToken(data.token);
  return data;
};

export const sendContact = async ({ name, email, message }) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });
  if (!res.ok) throw new Error('Failed to send message');
  return res.json();
};