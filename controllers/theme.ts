import { Request, Response } from 'express';
import Theme, { ITheme } from '../models/theme'; 

export const getTheme = (req: Request, res: Response): void => {
  const themeName: string = req.params.themeName;
  
  Theme.find({ themeName })
    .then((data: ITheme[]) => { 
      if (data.length === 0) res.status(404).send({ message: `Not found theme with name: ${themeName}` });
      else res.send(data[0]);
    })
    .catch((err: Error) => { 
      res.status(500).send({
        message: `Error retrieving theme with themeName=${themeName}`,
        error: err.message
      });
    });
};
export default {
  getTheme
};
