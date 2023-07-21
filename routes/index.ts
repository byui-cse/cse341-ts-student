import express from 'express';
import contacts from './contacts';

// Creating a new Router instance from Express.
const router = express.Router();

// Request that starts with '/contacts' will be passed to the 'contacts' Router instance for handling.
router.use('/contacts', contacts);

export default router;
