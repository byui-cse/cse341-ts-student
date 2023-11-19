"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const postLogin = (req, res, next) => {
    const email = req.body.email;
    console.log(email);
    // Ensure that the email is a string before proceeding
    if (typeof email !== 'string') {
        return res.status(400).send('Email must be a string.');
    }
    const loginInfo = { email: email };
    // Check if ACCESS_TOKEN_SECRET is defined
    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send('Internal server error.');
    }
    const accessToken = jsonwebtoken_1.default.sign(loginInfo, process.env.ACCESS_TOKEN_SECRET);
    res.status(201).json({ accessToken: accessToken });
};
exports.default = postLogin;
