"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers/");
const routes = (0, express_1.Router)();
// Add a GET route to our router. When the client sends a GET request to the '/' path (the root path), 
// the displayJoke function will be called.
routes.get('/', controllers_1.displayJoke);
// This means that when this file is imported in another one, the routes object will be what's imported by default.
exports.default = routes;
