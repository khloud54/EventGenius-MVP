<!--
  File: App.js
  Author: Khlud Awis
  Date: June 8, 2024
  Description: The React App component renders the UserDashboard and CreateEvent components 
-->
import React from 'react'; // Import React library

import UserDashboard from './components/UserDashboard'; // Import UserDashboard component
import CreateEvent from './components/CreateEvent'; // Import CreateEvent component

function App() {
  return (
    <div className="App">
      <UserDashboard /> {/* Render UserDashboard component */}
      <CreateEvent /> {/* Render CreateEvent component */}
    </div>
  );
}

export default App; // Export the App component as the default export
