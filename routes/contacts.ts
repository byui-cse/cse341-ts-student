import express from 'express';
import { getAll, getSingle } from '../controllers/contacts';

// Creating a new Router instance from Express.
const router = express.Router();

// Defining a GET route for the path '/' that uses the 'getAll' controller function.
router.get('/', getAll);

// Defining a GET route for the path '/:id' that uses the 'getSingle' controller function.
router.get('/:id', getSingle);

export default router;
