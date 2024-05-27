const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let events = []; // Temporary in-memory storage

// Endpoint to fetch user events
app.get('/api/user/events', (req, res) => {
  // Replace with real user ID in a real application
  const userId = req.query.userId || 'defaultUser';
  const userEvents = events.filter(event => event.userId === userId);
  res.json(userEvents);
});

// Endpoint to create a new event
app.post('/api/events', (req, res) => {
  const { name, date, location } = req.body;
  const newEvent = {
    id: events.length + 1,
    userId: 'defaultUser', // Replace with real user ID in a real application
    name,
    date,
    location
  };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
