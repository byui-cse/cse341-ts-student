import { getDb } from '../db/connect';
import { ObjectId } from 'mongodb';
import { Request, Response } from 'express';

// Type guard to check if the error is an instance of Error
const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

// Handler to get all contacts
const getAll = async (req: Request, res: Response) => {
  try {
    const result = await getDb()?.collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (error) {
    if (isError(error)) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

// Handler to get a single contact by id
const getSingle = async (req: Request, res: Response) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to find a contact.');
    return;
  }
  const userId = new ObjectId(req.params.id);
  try {
    const result = await getDb()?.collection('contacts').find({ _id: userId }).toArray();
    if (result && result[0]) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    if (isError(error)) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
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
  try {
    const response = await getDb()?.collection('contacts').insertOne(contact);
    if (response?.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json({ error: 'Some error occurred while creating the contact.' });
    }
  } catch (error) {
    if (isError(error)) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

// Handler to update an existing contact
const updateContact = async (req: Request, res: Response) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to update a contact.');
    return;
  }
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  try {
    const response = await getDb()?.collection('contacts').replaceOne({ _id: userId }, contact);
    if (response?.modifiedCount && response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json({ error: 'Some error occurred while updating the contact.' });
    }
  } catch (error) {
    if (isError(error)) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

// Handler to delete a contact
const deleteContact = async (req: Request, res: Response) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to delete a contact.');
    return;
  }
  const userId = new ObjectId(req.params.id);
  try {
    const response = await getDb()?.collection('contacts').deleteOne({ _id: userId });
    if (response?.deletedCount && response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json({ error: 'Some error occurred while deleting the contact.' });
    }
  } catch (error) {
    if (isError(error)) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export { getAll, getSingle, createContact, updateContact, deleteContact };
