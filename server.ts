// 'express' is a web application framework for Node.js, and 'Application' is a type provided by Express.
// 'routes' is a Router instance from the 'routes' module.
import express, { Application } from 'express';
import routes from './routes';

// Creating a new Express application instance.
const app: Application = express();

// The port number on which the server will listen for requests is either defined in the environment variable 'PORT' or defaulted to 8080.
const port: number = Number(process.env.PORT) || 8080;

// Using the 'use' method to add middleware to the application's middleware stack.
// Here, the 'routes' Router instance is added as middleware for the path '/'.
// This means that any HTTP request will be passed to the 'routes' Router instance for handling.
app.use('/', routes);

// Starting the server to listen on the specified port.
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
