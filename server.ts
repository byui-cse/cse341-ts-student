import express, { Express, Request, Response, NextFunction } from 'express';
import { initDb } from './db/connect';
import routes from './routes/index';
import { Db } from 'mongodb'; 

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

initDb((err: Error | null) => { 
  if (err) {
    console.error(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

app
  
  // Using routes from routes module
  .use('/', routes);
