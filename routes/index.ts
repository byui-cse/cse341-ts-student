import { Router, Request, Response } from 'express';

const routes: Router = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Sarah Birch');
});

export default routes;
