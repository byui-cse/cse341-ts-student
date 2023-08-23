import { Request, Response } from 'express';
const data: Data[] = require('../user.json'); // Importing user.json file from one directory up

type Data = {
  _id: {
    $oid: string;
  };
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

const userData: Data = data[0];

export const getData = (req: Request, res: Response): void => {
  res.status(200).json(userData);
};
