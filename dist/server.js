"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Tell our program to use the routes we defined when handling any requests that come to the '/' path.
app.use('/', routes_1.default);
// Tell our app to start listening for requests on the specified port.
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
