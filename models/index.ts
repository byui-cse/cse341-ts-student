import dbConfig from '../config/db.config';
import mongoose from 'mongoose';
import ThemeModel from './theme';
import UserModel from './user';

const db: {
  mongoose: typeof mongoose;
  url: string;
  theme: any;  
  user: any;
} = {
  mongoose,
  url: dbConfig.url,
  theme: ThemeModel,  
  user: UserModel,   
};

export default db;
