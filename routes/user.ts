import { Router } from 'express';
import * as userController from '../controllers/user';

const router: Router = Router();

router.get('/', userController.getAll);
router.get('/:username', userController.getUser);
router.post('/', userController.create);

export default router;
