import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes'; 
const app: Express = express();

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', routes);

import db from './models';

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err: Error) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });


const PORT: number = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
