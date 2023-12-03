import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { initDb } from './db/connect';

import users from './routes/users';

const app = express();

initDb((err: Error | null) => {
    if (err) {
        console.log(err);
    } 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', users);
app.get('/', (req, res) => {
    res.json({ message: 'Home' });
  });

export default app;
