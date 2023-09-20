import { Request, Response } from 'express';
import db from '../models';
const User = db.user;

export const create = (req: Request, res: Response): void => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the user.',
      });
    });
};

export const getAll = (req: Request, res: Response): void => {
  User.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      });
    });
};

export const getUser = (req: Request, res: Response): void => {
  const username = req.params.username;
  User.find({ username: username })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      });
    });
};
