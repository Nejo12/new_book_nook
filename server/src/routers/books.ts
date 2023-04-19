import express from 'express';

import book from '../controllers/book';

const router = express.Router();

// @route       GET api/books
// @description get all books
// @access      Public
router.get('/', book.allBooks);

// @route       POST api/books
// @description add/create/save book
// @access      will be Private
router.post('/', book.createBook);

// @route       GET api/books/:id
// @description get single book by id
// @access      Public
router.get('/:bookId', book.getBook);

// @route       PUT api/books/:id
// @description edit specific book by its Id
// @access      will be Private
router.put('/:bookId', book.updateBook);

// @route       DELETE api/books/:id
// @description delete book by id
// @access      will be Private
router.delete('/:bookId', book.deleteBook);

export default router;
