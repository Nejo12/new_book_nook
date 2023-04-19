import Book from '../models/Book';

import { BookDocument } from '../types/types';

function findAll(): Promise<BookDocument[]> {
  return Book.find().sort({ title: 1 }).exec();
}

function create(book: BookDocument): Promise<BookDocument> {
  return book.save();
}

export default { findAll, create };
