const express = require('express');
const router = express.Router();
const {getBooks, getBook, createBook, updateBook, deleteBook}  = require('../controllers/contactController');

router.route('/').get(getBooks);

router.route('/:id').get(getBook);

router.route('/').post(createBook);

router.route('/:id').put(updateBook);


router.route('/:id').delete(deleteBook);


module.exports = router;