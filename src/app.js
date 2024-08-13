const express = require("express");
const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const bookOperationsRoutes = require('./routes/bookOperationsRoutes');
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/book-operations', bookOperationsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;