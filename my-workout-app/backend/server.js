// backend/server.js
const express = require('express');
const connectDB = require('./db'); // Adjust the path as necessary

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth')); // Adjust the path as necessary

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
