import { Request, Response, NextFunction } from 'express';
import User from '../model/user';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: "Users fetched successfully",
            users: users
        });
    } catch (error) {
        // Type check for the error
        if (error instanceof Error) {
            res.status(500).json({ message: "Error fetching users", error: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};

export const postUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            age: req.body.age,
        });

        const savedUser = await user.save();
        res.status(201).json({
            message: "User added successfully",
            user: savedUser
        });
    } catch (error) {
        // Type check for the error
        if (error instanceof Error) {
            res.status(500).json({ message: "Error adding user", error: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};
