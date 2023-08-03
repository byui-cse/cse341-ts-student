import { Router } from 'express';
import { getUser, getUsername } from '../controllers/users';

const routes = Router();

routes.get('/', getUser);
routes.get('/username', getUsername);

export default routes;
