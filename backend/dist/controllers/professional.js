"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const connect_1 = require("../db/connect");
const getData = (req, res) => {
    var _a;
    const result = (_a = (0, connect_1.getDb)()) === null || _a === void 0 ? void 0 : _a.collection('user').find();
    // Transforming result to an array and sending as JSON response
    result === null || result === void 0 ? void 0 : result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
    // get data from database with mongodb
};
exports.getData = getData;
