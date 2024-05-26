import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch user events from the server
    axios.get('/api/user/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="dashboard">
      <h1>Your Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
