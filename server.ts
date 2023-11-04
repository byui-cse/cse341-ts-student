import express, { Request, Response } from 'express';
import { auth, requiresAuth } from 'express-openid-connect';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import mongoose from 'mongoose';
import User from './User';




dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 3000;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET as string,
  baseURL: process.env.BASE_URL as string,
  clientID: process.env.CLIENT_ID as string,
  issuerBaseURL: process.env.ISSUER_BASE_URL as string,
};

app.use(auth(config));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/myapp', {

} as any);

app.get('/', (req: Request, res: Response) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req: Request, res: Response) => {
  res.send(JSON.stringify(req.oidc.user));
});
app.get('/users', requiresAuth(), (req: Request, res: Response) => {
  try {
    User.find({})
      .then((data: object) => {
        res.status(200).send(data);
      })
      .catch((err: { message: object }) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
