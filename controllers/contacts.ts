import { getDb } from '../db/connect';
import { ObjectId } from 'mongodb';
import { Request, Response } from 'express';

// Handler to get all contacts
const getAll = async (req: Request, res: Response) => {
  const result = getDb()?.collection('contacts').find();
  result?.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

// Handler to get a single contact by id
const getSingle = async (req: Request, res: Response) => {
  const userId = new ObjectId(req.params.id);
  const result = getDb()?.collection('contacts').find({ _id: userId });
  result?.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

// Handler to create a new contact
const createContact = async (req: Request, res: Response) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await getDb()?.collection('contacts').insertOne(contact);
  if (response?.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json({ error: 'Some error occurred while creating the contact.' });
  }
};

// Handler to update an existing contact
const updateContact = async (req: Request, res: Response) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await getDb()?.collection('contacts').replaceOne({ _id: userId }, contact);
  if (response?.modifiedCount && response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json({ error: 'Some error occurred while updating the contact.' });
  }
};

// Handler to delete a contact
const deleteContact = async (req: Request, res: Response) => {
  const userId = new ObjectId(req.params.id);
  const response = await getDb()?.collection('contacts').deleteOne({ _id: userId });
  if (response?.deletedCount && response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json({ error: 'Some error occurred while deleting the contact.' });
  }
};

export { getAll, getSingle, createContact, updateContact, deleteContact };
