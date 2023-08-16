import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/user', (req: Request, res: Response) => {
  const response = { reversed: req.query.name?.toString().split('').reverse().join('') };
  res.status(200).json(response);
});

import swagger from './swagger';

router.use('/', swagger);

export default router;
