import { Request, Response } from 'express';
import db from '../models';
const Theme = db.theme;

export const getTheme = (req: Request, res: Response): void => {
  const themeName = req.params.themeName;
  Theme.find({ themeName: themeName })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found theme with name: ' + themeName });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving theme with themeName=' + themeName,
        error: err,
      });
    });
};
