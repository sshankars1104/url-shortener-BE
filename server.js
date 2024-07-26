const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Import cors package
require('dotenv').config();
const app = express();


// Connect to the MongoDB database
connectDB();

// Initialize middleware to parse JSON requests
app.use(express.json());

// Configure CORS
app.use(cors({
  origin: ['https://url-shortener-be-xqje.onrender.com', 'https://urls-shortener-fe.netlify.app/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Define routes
app.use('/api/users', require('./routes/users')); // User routes
app.use('/api/url', require('./routes/url')); // URL routes


// Example of a protected route
const auth = require('./middleware/auth');
app.get('/api/protected', auth, (req, res) => {
  res.json({ msg: 'This is a protected route', user: req.user });
});

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
