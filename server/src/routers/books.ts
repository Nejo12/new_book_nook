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
router.post(
  '/',
  // auth,
  // roles.grantAccess('createOwn', 'profile'),
  book.createBook,
);

export default router;
