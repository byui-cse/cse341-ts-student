//require typescript mongodb request, response, next
import { Request, Response } from 'express';
import { getDb } from '../db/connect';

  export const getData = (req: Request, res: Response): void => {
    const result = getDb()?.collection('user').find();
    // Transforming result to an array and sending as JSON response
    result?.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
    // get data from database with mongodb
  };


  
  