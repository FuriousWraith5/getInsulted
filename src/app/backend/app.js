// src/app/backend/src/app.js
const express = require('express');
const cors = require('cors');
const insults = require('./insults');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS for frontend communication
app.use(cors());

// API endpoint to get a random insult based on an ID (image click)
app.get('/api/insult/:id', (req, res) => {
    const id = req.params.id;  // You can map this to specific image IDs
    const insult = insults.getRandomInsult(id);  // Get random insult
    res.json({ insult });
});

module.exports = app;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
