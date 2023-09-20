import dbConfig from '../config/db.config';
import mongoose from 'mongoose';
import themeModel, { ITheme } from './theme';
import userModel, { IUser } from './user';
import { Model } from 'mongoose';

mongoose.Promise = global.Promise;

const db = {
  mongoose: mongoose,
  url: dbConfig.url,
  theme: themeModel as Model<ITheme>,
  user: userModel as Model<IUser>,
};

export default db;
