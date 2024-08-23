const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');

const dbURI = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const bookOperationsRoutes = require('./routes/bookOperationsRoutes');
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/book-operations', bookOperationsRoutes);

// Database connection
mongoose.connect(dbURI)
    .then(() => {
        console.log('Database connected');
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            // console.log(`click to open: http://localhost:${PORT}/api/users`)
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

// app.use('/api/books', require('./routes/booksRoutes'));


// const User = require('./models/userModel');

// async function insert(params) {
//     await User.create({
//         name: 'Sunil',
//         email: 'sunil@test.com',
//         role: 'admin'
//     });
// }

// insert();


// app.listen(PORT, () => {
//     console.log(`Server is runnig on port  ${PORT}`);
//     mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => console.log('MongoDB Connected'))
//         .catch(err => console.log(err));

// });