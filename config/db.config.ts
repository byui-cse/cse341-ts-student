import * as dotenv from 'dotenv';
dotenv.config();

const url = process.env.MONGODB_URI;

if (!url) {
  throw new Error('MONGODB_URI must be defined in the environment');
}

export const config = {
  url: url,
};
