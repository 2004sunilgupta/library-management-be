const express  = require("express");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');

const dbURI = process.env.DB_CONNECTION;

const app = express();

const port = process.env.PORT || 5000;

app.use('/api/books', require('./routes/booksRoutes'));

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Server is runnig on port  ${port}`);
});