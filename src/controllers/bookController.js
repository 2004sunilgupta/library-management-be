const Books = require('../models/bookModel');

// @desc Get All Books
// @route GET /api/books
// access public
exports.getAllBooks = async (req, res) => {
    try {
        const books  = await Books.find();
        res.json(books);
    } catch (err) {
        res.status(500).send(err);
    } 
};

// @desc Get Book
// @route GET /api/books/:id
// access public
exports.createBook = async (req, res) => {
    try {
        const newBook = new Books(req.body);
        const savedBook = await newBook.save();
        res.status(201).send(savedBook);
    } catch (err) {
        res.status(500).send(err);
    }
}

// @desc Create New Book Entry
// @route POST /api/books/:id
// access public

// @desc Update Book Entry
// @route PUT /api/books/:id
// access public

// @desc Delete Book Entry
// @route PUT /api/library
// access public
