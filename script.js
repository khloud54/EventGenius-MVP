function calculateTotal() {
    const eventSelect = document.getElementById('event');
    const ticketsInput = document.getElementById('tickets');
    const totalElement = document.getElementById('total');

    const eventPrices = {
        concert: 50,
        conference: 30,
        workshop: 20
    };

    const selectedEvent = eventSelect.value;
    const numberOfTickets = parseInt(ticketsInput.value);

    if (numberOfTickets > 0) {
        const totalPrice = eventPrices[selectedEvent] * numberOfTickets;
        totalElement.textContent = `Total Price: $${totalPrice}`;
    } else {
        totalElement.textContent = 'Please enter a valid number of tickets';
    }
}
