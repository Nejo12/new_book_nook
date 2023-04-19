import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

import routers from './routers';
import connectDB from './config/db';
import env from '../src/util/validate_env';

const app = express();

app.use(morgan('dev'));

connectDB();

app.set('port', env.PORT);

// to enable retrieval and send ability of json
app.use(express.json());

// Use routers
app.use('/api/books', routers.books);

export default app;
