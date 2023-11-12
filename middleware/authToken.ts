import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


declare global {  // This is to add a user property to the Request interface
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export default (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];  // This is to get the token from the header

    if (!token) return res.sendStatus(401);
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};
