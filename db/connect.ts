// 'dotenv' is a module that loads environment variables from a .env file into 'process.env'. This is why process.env.MONGODB_URI is used instead of a hardcoded connection string.
// 'MongoClient' and 'Db' are classes from the 'mongodb' module that are used to connect to a MongoDB database and interact with it.
import dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';

// Loading environment variables from .env file.
dotenv.config();

// Declaring a variable that will hold the database connection.
let _db: Db | undefined;

// 'initDb' function is responsible for establishing a connection with the MongoDB database.
const initDb = (callback: (error: Error | null, db?: Db) => void) => {
  if (_db) {
    // If the database connection is already established, the function logs a message and calls the callback with the existing connection.
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  // If the database connection has not been established, 'MongoClient.connect()' is called with the MongoDB connection string.
  MongoClient.connect(process.env.MONGODB_URI as string)
    .then((client: MongoClient) => {
      // The 'db()' method is called on the MongoClient instance to create a new Db instance and the database connection is established.
      // The 'callback' function is then called with the new Db instance.
      _db = client.db();
      callback(null, _db);
    })
    .catch((err: Error) => {
      // If an error occurs while trying to connect to the database, the 'callback' function is called with the error.
      callback(err);
    });
};

// 'getDb' function is used to get the Db instance if it exists.
// This function is typically used after calling 'initDb' to ensure the database connection is established before trying to get the Db instance.
const getDb = (): Db | undefined => {
  if (!_db) {
    // If the Db instance does not exist, an error is thrown.
    throw Error('Db not initialized');
  }
  // If the Db instance does exist, it is returned.
  return _db;
};

// Exporting the 'initDb' and 'getDb' functions so they can be imported and used in other modules(files).
export {
  initDb,
  getDb,
};
