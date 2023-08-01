import express, { Express } from 'express';
import routes from './routes';

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

// Tell our program to use the routes we defined when handling any requests that come to the '/' path.
app.use('/', routes)

// Tell our app to start listening for requests on the specified port.
app.listen(port, () => {
    console.log(`Running on port ${port}`)
});
