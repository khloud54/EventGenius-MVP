<!--
  File: script.js
  Author: Khloud Awis
  Date: June 8, 2024
  Description: This script.js file is designed for the EventGenius web application. Its primary function is to handle the calculation of total ticket prices based on user input. 
-->
function calculateTotal() {
    // Get the selected event element
    const eventSelect = document.getElementById('event');
    // Get the input element for number of tickets
    const ticketsInput = document.getElementById('tickets');
    // Get the element to display the total price
    const totalElement = document.getElementById('total');

    // Object mapping event types to their respective prices
    const eventPrices = {
        concert: 50,
        conference: 30,
        workshop: 20
    };

    // Get the value of the selected event
    const selectedEvent = eventSelect.value;
    // Parse the number of tickets as an integer
    const numberOfTickets = parseInt(ticketsInput.value);

    // Check if the number of tickets is greater than 0
    if (numberOfTickets > 0) {
        // Calculate the total price based on the selected event and number of tickets
        const totalPrice = eventPrices[selectedEvent] * numberOfTickets;
        // Display the total price in the totalElement
        totalElement.textContent = `Total Price: $${totalPrice}`;
    } else {
        // Display an error message if the number of tickets is not valid
        totalElement.textContent = 'Please enter a valid number of tickets';
    }
}
