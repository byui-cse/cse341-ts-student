import express, { Application } from 'express';
import routes from './routes';

const app: Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
