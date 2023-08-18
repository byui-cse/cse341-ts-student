import { Router } from 'express';
import * as themeController from '../controllers/theme';

const router: Router = Router();

router.get('/:themeName', themeController.getTheme);

export default router;
