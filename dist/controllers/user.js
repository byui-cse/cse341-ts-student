"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getAll = exports.create = void 0;
const models_1 = __importDefault(require("../models"));
const User = models_1.default.user;
const create = (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }
    const user = new User(req.body);
    user
        .save()
        .then((data) => {
        console.log(data);
        res.status(201).send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the user.',
        });
    });
};
exports.create = create;
const getAll = (req, res) => {
    User.find({})
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving users.',
        });
    });
};
exports.getAll = getAll;
const getUser = (req, res) => {
    const username = req.params.username;
    User.find({ username: username })
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving users.',
        });
    });
};
exports.getUser = getUser;
