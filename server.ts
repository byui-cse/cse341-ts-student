import express, { Request, Response } from 'express';
import { auth, requiresAuth } from 'express-openid-connect';
import dotenv from 'dotenv';

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

app.get('/', (req: Request, res: Response) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req: Request, res: Response) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
