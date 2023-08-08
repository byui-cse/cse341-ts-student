//require typescript mongodb request, response, next
import { Request, Response } from 'express';
import { getDb } from '../db/connect';
type Data = {
    professionalName: string;
    nameLink: {
      firstName: string;
      url: string;
    };
    base64Image: string;
    firstName: string;
    primaryDescription: string;
    workDescription1: string;
    workDescription2: string;
    linkTitleText: string;
    linkedInLink: {
      link: string;
      text: string;
    };
    githubLink: {
      link: string;
      text: string;
    };
    contactText: string;
  };
  

  
  export const getData = (req: Request, res: Response): void => {
    const result = getDb()?.collection('user').find();
    // Transforming result to an array and sending as JSON response
    result?.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
    // get data from database with mongodb

    
  };


  
  