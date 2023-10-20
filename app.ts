// Importing necessary modules and functions
// 'express' is a minimalist web framework for Node.js, it makes tasks like handling requests and sending responses much easier.
// 'body-parser' is middleware that helps parse incoming HTTP requests into a format that's easier to use.
// 'initDb' is a function from the connect module that initializes a MongoDB database connection.
import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { initDb } from './db/connect';
import routes from './routes';

// 'process.env.PORT' is an environment variable provided by the execution environment(Render will set it)
// If this environment variable is not defined, the server will default to port 8080.
const port: string | number = process.env.PORT || 8080;

// Creating Express application
const app: Express = express();

// Setting up middleware and routes
app
  // Using bodyParser middleware for parsing JSON
  .use(bodyParser.json())
  // The 'Access-Control-Allow-Origin' header determines which domains are allowed to access server resources over CORS.
  // By setting the value to '*', it allows all domains to access the resources.
  .use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  // Using routes from routes module
  .use('/', routes);
  
  process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
  });

// Initializing the database and starting the server
initDb((err: Error | null) => {
  if (err) {
    // Logging any error occurred during database initialization
    console.log(err);
  } else {
    // Starting the server if database initialization is successful
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
