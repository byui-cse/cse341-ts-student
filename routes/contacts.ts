// Importing necessary modules and functions
import express, { Router } from 'express';
import {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
} from '../controllers/contacts';

const router: Router = express.Router();

router.get('/', getAll);
router.get('/:id', getSingle);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
