const mongoose = require('mongoose');

const dbURI = process.env.DB_CONNECTION;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


module.exports = mongoose;