import { Request, Response, NextFunction } from 'express';
import { users} from '../modal/user';



const getInfo = (req: Request, res: Response, next: NextFunction) => {
    // Check if req.user and req.user.email are defined
    if (!req.user || typeof req.user.email !== 'string') {
        return res.status(400).send('User email is not available.');
    }

    const data = users.filter(user => user.email === req.user.email);

    // Check if any user is found
    if (data.length === 0) {
        return res.status(404).send('User not found.');
    }

    // Create a copy of the user data without password since we don't want to send it to the client, the user can access anything except the password
    const userData = { ...data[0] };
    delete userData.password;
   

    res.status(200).json(userData);
}

export default getInfo;
