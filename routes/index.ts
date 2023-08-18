import express, { Router } from 'express';
import swagger from './swagger';
import user from './user';
import theme from './theme';

const router: Router = express.Router();

router.use('/', swagger);
router.use('/user', user);
router.use('/theme', theme);

export default router;
