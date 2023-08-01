// We need to import express.
import express, { Express } from 'express';

// We need to import our routes from the routes folder.
import routes from './routes';

// We need to create a new express application.
const app: Express = express();

// We will need to create a function for If there is a port 
// in an enviorment variable, which render uses, then it will use that port. If not, it uses localhost3000.
const port: string | number = process.env.PORT || 3000;

// Now we need to comminicate to the program that we are using the routes we defined.
// AKA anything after the root path.
app.use('/', routes)

// We need to tell our app to listen for requests on the specified port.
// To do this, we will use the listen method on our app object.
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
