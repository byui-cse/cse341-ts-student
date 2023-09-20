"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheme = void 0;
const models_1 = __importDefault(require("../models"));
const Theme = models_1.default.theme;
const getTheme = (req, res) => {
    const themeName = req.params.themeName;
    Theme.find({ themeName: themeName })
        .then((data) => {
        if (!data)
            res.status(404).send({ message: 'Not found theme with name: ' + themeName });
        else
            res.send(data[0]);
    })
        .catch((err) => {
        res.status(500).send({
            message: 'Error retrieving theme with themeName=' + themeName,
            error: err,
        });
    });
};
exports.getTheme = getTheme;
