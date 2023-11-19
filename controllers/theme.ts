import { Request, Response } from 'express';
import db from '../models';
const User = db.user; 

export const getTheme = (req: Request, res: Response): void => {
  const themeName = req.params.themeName;
  User.find({ "theme_name": themeName })
    .then((users) => {
      if (!users.length) {
        res.status(404).send({ message: 'No users found with theme name: ' + themeName });
      } else {
        res.send(users); // Sends back an array of users with the specified theme name
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving users with themeName=' + themeName,
        error: err,
      });
    });
};
