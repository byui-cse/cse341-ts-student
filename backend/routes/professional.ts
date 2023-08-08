import express, { Router, Request, Response } from 'express';
import { getData } from '../controllers/professional';

const router: Router = express.Router();

router.get('/professional', (req: Request, res: Response) => {
    getData(req, res);
});

export default router;
