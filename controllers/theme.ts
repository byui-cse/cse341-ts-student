import { Request, Response } from 'express';
import db from '../models';
const User = db.user; 

const getTheme = (req: Request, res: Response): void => {
  const themeName = req.params.themeName;
  User.find({ "theme_name": themeName })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((users: string | any[]) => {
      if (!users.length) {
        res.status(404).send({ message: 'No users found with theme name: ' + themeName });
      } else {
        res.send(users); // Sends back an array of users with the specified theme name
      }
    })
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch((err: any) => {
      res.status(500).send({
        message: 'Error retrieving users with themeName=' + themeName,
        error: err,
      });
    });
};
export default { getTheme };