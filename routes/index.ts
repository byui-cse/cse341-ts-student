import { Router } from 'express';
import { displayJoke } from '../controllers/';

const routes = Router();

// Add a GET route to our router. When the client sends a GET request to the '/' path (the root path), 
// the displayJoke function will be called.
routes.get('/', displayJoke);

// This means that when this file is imported in another one, the routes object will be what's imported by default.
export default routes;
