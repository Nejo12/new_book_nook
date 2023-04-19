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
    res.json(await BookService.findAll());
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

    await BookService.create(book);
    res.json({ msg: 'Book created successfully', book });
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      next(new BadRequestError('invalid Request', err));
    } else {
      next(new InternalServerError('Internal Server Error', err));
    }
  }
};

export default { allBooks, createBook };
