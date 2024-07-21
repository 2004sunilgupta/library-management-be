const express  = require("express");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 5000;

app.use('/api/books', require('./routes/booksRoutes'));


app.listen(port, () => {
    console.log(`Server is runnig on port  ${port}`);
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
        console.log('connected db')
    });
});