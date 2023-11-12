import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
const PORT = 8080;
const app = express();

// Routes import
import loginRoutes from './routes/login';
import userInfoRoutes from './routes/userInfo';

app.use(express.json());
// This is to allow CORS, you could use the cors package instead
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    // This is to allow preflight request so that we can send authorization header
    if (req.method === "OPTIONS") {
        res.sendStatus(200);
    } else {
        next();
    }
});
// Routes
app.use("/login", loginRoutes);
app.use("/userInfo", userInfoRoutes);

app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});
