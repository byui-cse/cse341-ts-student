import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import http from 'http';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Import the routing file to handle the default (index) route
import index from './routes/app';
import bookRoutes from './routes/books';

const app = express(); // Create an instance of express

// Tell express to use the following parsers for POST data
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(logger('dev')); // Tell express to use the Morgan logger

// Add support for CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});


// Tell express to map the default route ('/') to the index route
app.use('/', index);
app.use('/books', bookRoutes);

// Establish a connection to the mongo database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to database!');
  } catch (err) {
    console.log('Connection failed: ' + err);
  }
}

connectToDatabase();


// Tell express to map all other non-defined routes back to the index page
app.get('*', (req: Request, res: Response) => {
  res.redirect('/');
});

// Define the port address and tell express to use this port
const port: number | string = process.env.PORT || '8080';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, () => {
  console.log('API running on localhost: ' + port)
});
