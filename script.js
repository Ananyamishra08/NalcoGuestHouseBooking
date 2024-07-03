document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;

        const booking = { name, email, checkin, checkout };

        // Save the booking to the server
        // used fetch api
        fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Clear the form
            bookingForm.reset();
            console.log('Booking saved successfully');
        })
        .catch(error => console.error('Error saving booking:', error));
    });
});
