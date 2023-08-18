import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
  url: process.env.MONGODB_URI as string,
};

export default dbConfig;
