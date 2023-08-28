import { Request, Response } from "express";

const welcome = (req: Request, res: Response) => {
    res.send('Sarah Birch!');
}
const welcomeNathan = (req: Request, res: Response) => {
    res.send('Nathan Birch!');
}
export {welcome, welcomeNathan};