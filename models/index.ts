import { config as dbConfig } from '../config/db.config';
import mongoose, { Mongoose } from 'mongoose';
import { createTemplesModel } from './temples'; 

mongoose.Promise = global.Promise;

interface Db {
  mongoose: Mongoose;
  url: string;
  temples: ReturnType<typeof createTemplesModel>; 
}

const db: Db = {
  mongoose: mongoose,
  url: dbConfig.url,
  temples: createTemplesModel(mongoose), 
};

export = db;
