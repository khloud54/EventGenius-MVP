<!--
  File: server.js
  Author: Khloud Awis
  Date: June 8, 2024
  Description: This Node.js script sets up an Express server with endpoints to fetch user events 
-->
const express = require('express'); // Import the Express framework
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const cors = require('cors'); // Middleware for enabling Cross-Origin Resource Sharing

const app = express(); // Create an Express application instance
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON requests
app.use(cors()); // Use cors middleware to enable Cross-Origin Resource Sharing

let events = []; // Temporary in-memory storage for events

// Endpoint to fetch user events
app.get('/api/user/events', (req, res) => {
  // Replace with real user ID in a real application
  const userId = req.query.userId || 'defaultUser';
  const userEvents = events.filter(event => event.userId === userId);
  res.json(userEvents); // Respond with JSON containing user's events
});

// Endpoint to create a new event
app.post('/api/events', (req, res) => {
  const { name, date, location } = req.body; // Extract event details from request body
  const newEvent = {
    id: events.length + 1, // Assign a unique ID to the new event
    userId: 'defaultUser', // Replace with real user ID in a real application
    name,
    date,
    location
  };
  events.push(newEvent); // Add the new event to the events array
  res.status(201).json(newEvent); // Respond with JSON containing the newly created event
});

const PORT = process.env.PORT || 5000; // Define the port for the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log a message when the server starts running
});
