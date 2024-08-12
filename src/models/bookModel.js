const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    book_id: { type: String, required: true, unique: true },
    author: { type: String },
    price: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);