import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Jenny Sanderson');
});

export default routes;
