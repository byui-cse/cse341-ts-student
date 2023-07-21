// 'Router' is a middleware function provided by Express to create new router objects.
// 'Request' and 'Response' are types provided by Express.
import { Router, Request, Response } from 'express';

// Creating a new Router instance.
const routes: Router = Router();

// Defining a GET route for the path '/'.
// When a GET request is sent to the base URL of the application, this callback function is called.
// The callback sends the string 'Sarah Birch' as the HTTP response.
routes.get('/', (req: Request, res: Response) => {
  res.send('Sarah Birch');
});

// Exporting the router instance so it can be imported and used in other modules.
export default routes;
