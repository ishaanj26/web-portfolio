require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: ['https://ishaan-jain-web-portfolio.onrender.com', 'http://localhost:5173'],
    credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define Schema and Model
const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    description: String,
    timestamp: String

});

const FormData = mongoose.model('FormData', FormDataSchema);

// Routes
app.post('/submit', async (req, res) => {
    try {
        const { name, email, description } = req.body;
        const date = moment(Date()).format('MMMM D, YYYY h:mm:ss A'); // Create a date object using Moment.js
        const newFormEntry = new FormData({
            name, email, description, timestamp: date
        });
        await newFormEntry.save();
        res.status(201).json({ message: "Form submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error saving data", error });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
