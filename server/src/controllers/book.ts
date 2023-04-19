import { Request, Response, NextFunction, RequestHandler } from 'express';

import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError';
import Book from '../models/Book';
import BookService from '../services/book';

const allBooks: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(await BookService.findAllBooks());
  } catch (err: any) {
    next(new NotFoundError('Could not find any book.', err));
  }
};

const createBook: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { title, isbn, author, copies, description, publishedDate, publisher } =
    req.body;
  try {
    const book = new Book({
      title,
      isbn,
      author,
      copies,
      description,
      publishedDate,
      publisher,
    });

    await BookService.createBook(book);
    res.json({ msg: 'Book created successfully', book });
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      next(new BadRequestError('invalid Request', err));
    } else {
      next(new InternalServerError('Internal Server Error', err));
    }
  }
};

const getBook = async (req: Request, res: Response, next: NextFunction) => {
  const book = await BookService.findBookById(req.params.bookId);

  return res.json({ book });
};

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const update = req.body;
    const bookId = req.params.bookId;
    const updatedBook = await BookService.updateBook(bookId, update);
    res.json({ msg: 'Book updated successfully', updatedBook });
  } catch (err: any) {
    next(new NotFoundError('Book Not Found', err));
  }
};

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await BookService.deleteBook(req.params.bookId);
    return res.status(204).json({ msg: 'Book entry deleted successfully' });
  } catch (err: any) {
    next(new NotFoundError(' Book not found', err));
  }
};

export default { allBooks, createBook, getBook, updateBook, deleteBook };
