import { getDb } from '../db/connect';
import { Request, Response, NextFunction } from 'express';

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const result = getDb()?.collection('user').find();
  result?.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const getUsername = async (req: Request, res: Response, next: NextFunction) => {
    const result = getDb()?.collection('user').find(); 
    result?.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0].username);
    });

};

export { getUser, getUsername };
