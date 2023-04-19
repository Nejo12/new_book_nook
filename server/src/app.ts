import 'dotenv/config';
import express from 'express';

import connectDB from './config/db';
import BookModel from './models/Book';
import env from '../src/util/validate_env';

const app = express();

connectDB();

app.set('port', env.PORT);

app.get('/', async (req, res) => {
  const books = await BookModel.find().exec();
  res.status(200).json(books);
});

export default app;
