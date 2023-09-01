import express, { Router } from 'express';
import { getData } from '../controllers/professional';

const router: Router = express.Router();

router.get('/professional',getData);

export default router;
