import { Document } from 'mongoose';

type BookDocument = Document & {
  title: string;
  isbn: string;
  author: string;
  copies: number;
  description: string;
  publishedDate: Date;
  publisher: string;
};
