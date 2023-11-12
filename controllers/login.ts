import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

const postLogin = (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    console.log(email);

    // Ensure that the email is a string before proceeding
    if (typeof email !== 'string') {
        return res.status(400).send('Email must be a string.');
    }

    const loginInfo = { email: email };

    // Check if ACCESS_TOKEN_SECRET is defined
    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send('Internal server error.');
    }
    
    const accessToken = jwt.sign(loginInfo, process.env.ACCESS_TOKEN_SECRET);
    res.status(201).json({ accessToken: accessToken });
};
export default postLogin;
