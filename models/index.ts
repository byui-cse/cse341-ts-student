import dbConfig from '../config/db.config';
import mongoose from 'mongoose';
import ThemeModel from './theme';
import UserModel from './user';


const db: {
  mongoose: typeof mongoose;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any;  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
} = {
  mongoose,
  url: dbConfig.url,
  theme: ThemeModel,  
  user: UserModel,   
};

export default db;
