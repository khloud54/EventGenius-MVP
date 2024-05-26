import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
  const [event, setEvent] = useState({ name: '', date: '', location: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/events', event)
      .then(() => {
        alert('Event created successfully!');
        setEvent({ name: '', date: '', location: '' });
      })
      .catch(error => console.error('Error creating event:', error));
  };

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

export default CreateEvent;
