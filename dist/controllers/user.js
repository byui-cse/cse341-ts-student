"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.getAll = exports.create = void 0;
const models_1 = __importDefault(require("../models"));
const User = models_1.default.user;
const passwordUtil = __importStar(require("../util/passwordComplexityCheck"));
const create = (req, res) => {
    try {
        console.log("User Model: ", User);
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).send({ message: 'Content cannot be empty!' });
            return;
        }
        const passwordCheck = passwordUtil.passwordPass(password);
        if (passwordCheck.error) {
            res.status(400).send({ message: passwordCheck.error });
            return;
        }
        const user = new User(req.body);
        user.save()
            .then((data) => {
            console.log("Data saved: ", data);
            res.status(200).send(data);
        })
            .catch((err) => {
            console.error("Error in saving: ", err);
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the user.'
            });
        });
    }
    catch (err) {
        console.error("General Error: ", err);
        res.status(500).json(err);
    }
};
exports.create = create;
const getAll = (req, res) => {
    try {
        User.find({})
            .then((data) => {
            res.status(200).send(data);
        })
            .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users.'
            });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getAll = getAll;
const getUser = (req, res) => {
    try {
        const username = req.params.username;
        User.find({ username })
            .then((data) => {
            res.status(200).send(data);
        })
            .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving the user.'
            });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.params.username;
        if (!username) {
            res.status(400).send({ message: 'Invalid Username Supplied' });
            return;
        }
        const password = req.body.password;
        const passwordCheck = passwordUtil.passwordPass(password);
        if (passwordCheck.error) {
            res.status(400).send({ message: passwordCheck.error });
            return;
        }
        const user = yield User.findOne({ username }).exec();
        if (!user) {
            res.status(404).send({ message: 'User not found' });
            return;
        }
        // Update user properties here
        user.username = username;
        user.password = password;
        user.displayName = req.body.displayName;
        user.info = req.body.info;
        user.profile = req.body.profile;
        yield user.save();
        res.status(204).send();
    }
    catch (err) {
        res.status(500).json({ message: err.message || 'Some error occurred while processing your request.' });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.params.username;
        if (!username) {
            res.status(400).json({ message: 'Invalid Username Supplied' });
            return;
        }
        const result = yield User.deleteOne({ username }).exec();
        if (result.deletedCount === 0) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(204).send();
    }
    catch (err) {
        res.status(500).json({ message: err.message || 'Some error occurred while deleting the user.' });
    }
});
exports.deleteUser = deleteUser;
exports.default = {
    create: exports.create,
    getAll: exports.getAll,
    getUser: exports.getUser,
    updateUser: exports.updateUser,
    deleteUser: exports.deleteUser
};
