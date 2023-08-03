"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsername = exports.getUser = void 0;
const connect_1 = require("../db/connect");
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = (_a = (0, connect_1.getDb)()) === null || _a === void 0 ? void 0 : _a.collection('user').find();
    result === null || result === void 0 ? void 0 : result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
});
exports.getUser = getUser;
const getUsername = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const result = (_b = (0, connect_1.getDb)()) === null || _b === void 0 ? void 0 : _b.collection('user').find();
    result === null || result === void 0 ? void 0 : result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0].username);
    });
});
exports.getUsername = getUsername;
