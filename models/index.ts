import dbConfig from '../config/db.config';
import mongoose from 'mongoose';
import themeModel, { Theme } from './theme';
import userModel, { User } from './user';
import { Model } from 'mongoose';

mongoose.Promise = global.Promise;

const db = {
  mongoose: mongoose,
  url: dbConfig.url,
  theme: themeModel as Model<Theme>,
  user: userModel as Model<User>,
};

export default db;
