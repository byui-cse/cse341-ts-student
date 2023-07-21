// Importing necessary modules and functions
import { getDb } from '../db/connect';
import { ObjectId } from 'mongodb';
import { Request, Response, NextFunction } from 'express';

// Handler to get all contacts
const getAll = async (req: Request, res: Response, next: NextFunction) => {
  // Retrieving the database instance and querying all contacts
  const result = getDb()?.collection('contacts').find();
  // Transforming result to an array and sending as JSON response
  result?.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

// Handler to get a single contact by id
const getSingle = async (req: Request, res: Response, next: NextFunction) => {
  // Converting request id parameter to ObjectId format for MongoDB
  const userId = new ObjectId(req.params.id);
  // Retrieving the database instance and querying for the specific contact
  const result = getDb()?.collection('contacts').find({ _id: userId });
  // Transforming result to an array and sending the first item(the contact data) as a JSON response
  result?.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

// Exporting the handlers
export { getAll, getSingle };
