"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = require("./db/connect");
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, connect_1.initDb)((err, db) => {
    if (err) {
        console.error(err);
    }
    else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
app
    // Using routes from routes module
    .use('/', index_1.default);
