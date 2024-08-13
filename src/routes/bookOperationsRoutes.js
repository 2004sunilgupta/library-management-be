const express = require('express');
const router = express.Router();
const bookOperationsController = require('../controllers/bookOperationsController');

// issue a book
router.post('/issue', bookOperationsController.bookIssue);

module.exports = router;