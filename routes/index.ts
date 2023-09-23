import express from 'express';
import s from './swagger';
import userRouter from './user';
import themeRouter from './theme';

const mainRouter = express.Router();

mainRouter.use('/', s);
mainRouter.use('/user',userRouter ); 
mainRouter.use('/theme', themeRouter);  

export default mainRouter;
