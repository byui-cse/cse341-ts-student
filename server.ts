import express, { Express, Request, Response, NextFunction } from 'express';
import { initDb } from './db/connect';
import routes from './routes/index';


const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app
  .use('/', routes);


initDb((err: Error | null) => { 
  if (err) {
    console.error(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

