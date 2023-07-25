import express from 'express';
import contacts from './contacts';
import s from './swagger';

// Creating a new Router instance from Express.
const router = express.Router();

// Request that starts with '/contacts' will be passed to the 'contacts' Router instance for handling.
router.use('/contacts', contacts);

// Request that starts with '/api-docs' will be passed to the 'swagger' Router instance for handling.
router.use('/', s);

export default router;
