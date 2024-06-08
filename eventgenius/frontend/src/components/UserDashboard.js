<!--
  File: UserDashboard.js
  Author: Khloud Awis
  Date: June 8, 2024
  Description: This React component, UserDashboard, displays a list of user events.
-->
import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect hooks
import axios from 'axios'; // Import Axios for HTTP requests

const UserDashboard = () => {
  const [events, setEvents] = useState([]); // State for user events

  useEffect(() => {
    // Fetch user events from the server on component mount
    axios.get('http://localhost:5000/api/user/events')
      .then(response => setEvents(response.data)) // Update events state with fetched data
      .catch(error => console.error('Error fetching events:', error)); // Log error if request fails
  }, []); // Empty dependency array ensures effect runs only once on component mount

  // Render the user dashboard with event details
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

export default UserDashboard; // Export the UserDashboard component
