"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const user_json_1 = __importDefault(require("../user.json")); // Importing user.json file from one directory up
const userData = user_json_1.default[0];
const getData = (req, res) => {
    res.status(200).json(userData);
};
exports.getData = getData;
