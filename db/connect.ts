import dotenv from 'dotenv';
import mongoose, { Mongoose } from 'mongoose';

dotenv.config();

// _db is of type Mongoose | undefined, initially undefined
let _db: Mongoose | undefined;


type CallbackFunction = (error: Error | null, db?: Mongoose) => void;


const initDb = (callback: CallbackFunction): void => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  
  mongoose.connect(process.env.MONGODB_URI as string)
    .then((client: Mongoose) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err: Error) => {
      callback(err);
    });
};

const getDb = (): Mongoose => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};


export { initDb, getDb };
