"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../modal/user");
const getInfo = (req, res, next) => {
    // Check if req.user and req.user.email are defined
    if (!req.user || typeof req.user.email !== 'string') {
        return res.status(400).send('User email is not available.');
    }
    const data = user_1.users.filter(user => user.email === req.user.email);
    // Check if any user is found
    if (data.length === 0) {
        return res.status(404).send('User not found.');
    }
    // Create a copy of the user data without password since we don't want to send it to the client, the user can access anything except the password
    const userData = Object.assign({}, data[0]);
    delete userData.password;
    res.status(200).json(userData);
};
exports.default = getInfo;
