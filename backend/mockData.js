// src/mockData.js

const mockTours = [
  {
    id: 1,
    name: "Bali Paradise Escape",
    summary: "Experience the ultimate tropical getaway in Bali with beaches, temples, and culture.",
    description: "7-day all-inclusive tour featuring Ubud rice terraces, Tanah Lot temple, and Nusa Penida island hopping.",
    duration: "7 days",
    difficulty: "Easy",
    price: 1299,
    maxGroupSize: 12,
    ratingsAverage: 4.8,
    ratingsQuantity: 42,
    images: ["bali-1.jpg", "bali-2.jpg", "bali-3.jpg"],
    startDates: ["2025-06-01", "2025-08-15", "2025-11-20"],
    featured: true
  },
  {
    id: 2,
    name: "Japan Cherry Blossom Tour",
    summary: "Witness the magical sakura season across Tokyo, Kyoto, and Mount Fuji.",
    description: "10-day journey through Japan's most beautiful spring destinations.",
    duration: "10 days",
    difficulty: "Medium",
    price: 3499,
    maxGroupSize: 10,
    ratingsAverage: 4.9,
    ratingsQuantity: 38,
    images: ["japan-1.jpg", "japan-2.jpg", "kyoto.jpg"],
    startDates: ["2026-03-20", "2026-03-27"],
    featured: true
  },
  {
    id: 3,
    name: "Machu Picchu & Sacred Valley",
    summary: "Hike the Inca Trail to the lost city of the Incas.",
    description: "Challenging yet rewarding trek with breathtaking views and rich history.",
    duration: "4 days",
    difficulty: "Difficult",
    price: 2199,
    maxGroupSize: 8,
    ratingsAverage: 5.0,
    ratingsQuantity: 29,
    images: ["machu-1.jpg", "inca-trail.jpg", "cusco.jpg"],
    startDates: ["2025-07-10", "2025-09-05"],
    featured: false
  },
  {
    id: 4,
    name: "Northern Lights in Iceland",
    summary: "Chase the Aurora Borealis with glacier hikes and hot springs.",
    description: "Winter adventure including ice caves, Golden Circle, and South Coast.",
    duration: "6 days",
    difficulty: "Medium",
    price: 2899,
    maxGroupSize: 10,
    ratingsAverage: 4.7,
    ratingsQuantity: 51,
    images: ["iceland-1.jpg", "aurora.jpg", "glacier.jpg"],
    startDates: ["2025-12-10", "2026-01-15", "2026-02-20"],
    featured: true
  },
  {
    id: 5,
    name: "Santorini & Mykonos Greek Islands",
    summary: "Island hopping in the Aegean Sea with stunning sunsets and nightlife.",
    description: "Relax on black sand beaches, explore ancient ruins, and enjoy Greek cuisine.",
    duration: "9 days",
    difficulty: "Easy",
    price: 2599,
    maxGroupSize: 15,
    ratingsAverage: 4.6,
    ratingsQuantity: 67,
    images: ["santorini.jpg", "mykonos.jpg", "oia.jpg"],
    startDates: ["2025-07-01", "2025-08-10"],
    featured: false
  },
  {
    id: 6,
    name: "Safari in Serengeti & Zanzibar",
    summary: "Witness the Great Migration and relax on pristine beaches.",
    description: "Combined wildlife safari and beach relaxation in Tanzania.",
    duration: "12 days",
    difficulty: "Easy",
    price: 4999,
    maxGroupSize: 6,
    ratingsAverage: 4.9,
    ratingsQuantity: 33,
    images: ["serengeti.jpg", "zanzibar.jpg", "lion.jpg"],
    startDates: ["2025-07-20", "2025-10-05"],
    featured: true
  }
];

// Optional: Mock users (for future auth)
const mockUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123", // In real app, this would be hashed
    role: "user"
  },
  {
    id: "2",
    name: "Admin User",
    email: "admin@tourapp.com",
    password: "admin123",
    role: "admin"
  }
];

module.exports ={mockTours, mockUsers} ;