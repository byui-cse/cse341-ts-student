import express, { Request, Response, NextFunction } from 'express';


const router = express.Router();

// GET home page.
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'This is the main route' });
});


export default router;
