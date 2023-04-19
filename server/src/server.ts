import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';

import env from '../src/util/validate_env';

import BookModel from './models/Book';

const app = express();

app.get('/', async (req, res) => {
  const books = await BookModel.find().exec();
  res.status(200).json(books);
});

const port = env.PORT;

mongoose
  .connect(env.MONGODB_URI)
  .then(() => {
    console.log('Mongoose Connected');
    app.listen(port, () => {
      console.log('Server is running on port: ' + port);
    });
  })
  .catch(console.error);
