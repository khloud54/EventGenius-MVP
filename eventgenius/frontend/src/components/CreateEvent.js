<!--
  File: CreateEvent.js
  Author: Khloud Awis
  Date: June 8, 2024
  Description: This React component, CreateEvent, allows users to input event details and submit them to create a new event.
-->
import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import Axios for HTTP requests

const CreateEvent = () => {
  const [event, setEvent] = useState({ name: '', date: '', location: '' }); // State for event details

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    axios.post('http://localhost:5000/api/events', event) // Send POST request to create event
      .then(() => {
        alert('Event created successfully!'); // Display success message
        setEvent({ name: '', date: '', location: '' }); // Clear form inputs
      })
      .catch(error => console.error('Error creating event:', error)); // Log error if request fails
  };

  // Render the create event form
  return (
    <div className="create-event">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={event.location}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent; // Export the CreateEvent component
