import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import mainRouter from './routes';



const port: string | number = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', mainRouter);  
import db from './models';
db.mongoose.connect(db.url, {
})
.then(() => {
  app.listen(port, () => {
    console.log(`DB Connected and server running on ${port}.`);
  });
})
.catch((err: any) => {  // Consider defining a specific error type.
  console.log('Cannot connect to the database!', err);
  process.exit();
});
