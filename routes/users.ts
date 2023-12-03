import { Router } from 'express';
import * as usersController from '../controllers/users';

const router = Router();

router.get('/users', usersController.getUsers);
router.post('/users', usersController.postUser);

export default router;
