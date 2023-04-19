import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';

import env from '../src/util/validate_env';

const app = express();

app.get('/', (req, res) => {
  res.send('Testing Hello World.');
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
