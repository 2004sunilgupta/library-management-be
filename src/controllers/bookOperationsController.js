const Book = require('../models/bookModel');
const User = require('../models/userModel');

// Issue a book
exports.bookIssue = async(req, res) => {
    try {
        console.log(req.body);
        const { email, bookId } = req.body;
        const book = await Book.findOne({bookId});
        if(!book || !book.available) {
            return res.status(400).json({message: 'Book is not available'});
        }

        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: 'User not found'});
        }

        book.issuedTo = user._id;
        book.available = false;
        book.dueDate = new Date(Date.now() + 14*24*60*60*1000);
        user.issuedBooks(book._id);

        await book.save();
        await user.save();
        console.log("test")

        res.status(200).json({message: 'Book issued successfully'})
        
    } catch (err) {
        res.status(400).send(err);
    }
}