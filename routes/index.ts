// We need to import the router from express. 
import { Router } from 'express';

// We need to import the functions we made in the controllers\index.ts file.
import { rykerFunction } from '../controllers/';
import { returnAnotherRyker } from '../controllers/';

// Create a new router object.
const routes = Router();

// Here, we will add a git to the router. 
// The router will handle any requests that come to the '/' path.
// The '/' path is the root path. It is the path that comes after the domain name.
// For example, if the domain name is 'www.google.com', the root path would be 'www.google.com/'.
// We also need to make another path for the other function we made.
routes.get('/', rykerFunction);
routes.get('/ryker', returnAnotherRyker);

// Now, we need to export the router object.
export default routes;
