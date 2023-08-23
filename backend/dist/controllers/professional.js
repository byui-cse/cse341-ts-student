"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const data = require('../user.json'); // Importing user.json file from one directory up
// Assuming that you want to use the first object in the array
const userData = data[0];
const getData = (req, res) => {
    res.status(200).json(userData);
};
exports.getData = getData;
