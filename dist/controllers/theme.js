"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const User = models_1.default.user;
const getTheme = (req, res) => {
    const themeName = req.params.themeName;
    User.find({ "theme_name": themeName })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((users) => {
        if (!users.length) {
            res.status(404).send({ message: 'No users found with theme name: ' + themeName });
        }
        else {
            res.send(users); // Sends back an array of users with the specified theme name
        }
    })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((err) => {
        res.status(500).send({
            message: 'Error retrieving users with themeName=' + themeName,
            error: err,
        });
    });
};
exports.default = { getTheme };
