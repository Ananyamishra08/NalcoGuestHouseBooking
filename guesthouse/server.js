const express = require('express');
const path = require('path');
const StaticJsonDb = require('static-json-db');

const app = express();
const port = 3000;

// Initialize the database using static-json-db
const db = new StaticJsonDb('data/db.json');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API to get bookings
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await db.get('bookings') || [];
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

// API to add a booking
app.post('/api/bookings', async (req, res) => {
    try {
        const booking = req.body;
        let bookings = await db.get('bookings') || [];
        bookings.push(booking);
        await db.set('bookings', bookings);
        await db.write();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to save booking' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
