// @desc Get All Books
// @route GET /api/books
// access public

const getBooks = (req, res) => {
    res.status(200).json({message: 'Get All Books'});
};

// @desc Get Book
// @route GET /api/books/:id
// access public

const getBook = (req, res) => {
    res.status(200).json({message: `Get All Books for ${req.params.id}`});
}


// @desc Create New Book Entry
// @route POST /api/books/:id
// access public

const createBook = (req, res) => {
    res.status(200).json({message: 'Create Book'});
};


// @desc Update Book Entry
// @route PUT /api/books/:id
// access public

const updateBook = (req, res) => {
    res.status(200).json({message: `Update Book for ${req.params.id}`});
};

// @desc Delete Book Entry
// @route PUT /api/library
// access public

const deleteBook = (req, res) => {
    res.status(200).json({message: `Delete book for ${req.params.id}`});
};


module.exports = {getBooks, getBook, createBook,  updateBook, deleteBook };
