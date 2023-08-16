import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { initDb } from './db/connect';
import routes from './routes';


const port: string | number = process.env.PORT || 8080;


const app: Express = express();

app
  .use(bodyParser.json())
  .use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', routes);
initDb((err: Error | null) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});