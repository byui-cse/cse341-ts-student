import dotenv from 'dotenv';
dotenv.config();

const config = {
  url: process.env.MONGODB_URI as string, 
};

export default config;
