import express from 'express';
import  postLogin from '../controllers/login';

const router = express.Router();

// POST LOGIN
router.post("/", postLogin);

export default router;
