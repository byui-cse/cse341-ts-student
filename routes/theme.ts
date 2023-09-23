import express from 'express';
import themeController from '../controllers/theme';  // Assuming default export
const themeRouter = express.Router();

themeRouter.get('/:themeName', themeController.getTheme);

export default themeRouter;
