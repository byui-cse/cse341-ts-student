"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const connect_1 = require("./db/connect");
const professional_1 = __importDefault(require("./routes/professional"));
// 'process.env.PORT' is an environment variable provided by the execution environment(Render will set it)
// If this environment variable is not defined, the server will default to port 8080.
const port = process.env.PORT || 8080;
// Creating Express application
const app = (0, express_1.default)();
// Setting up middleware and routes
app
    // Using bodyParser middleware for parsing JSON
    .use(body_parser_1.default.json())
    // The 'Access-Control-Allow-Origin' header determines which domains are allowed to access server resources over CORS.
    // By setting the value to '*', it allows all domains to access the resources.
    .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
    // Using routes from routes module
    .use('/', professional_1.default);
// Initializing the database and starting the server
(0, connect_1.initDb)((err) => {
    if (err) {
        // Logging any error occurred during database initialization
        console.log(err);
    }
    else {
        // Starting the server if database initialization is successful
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
