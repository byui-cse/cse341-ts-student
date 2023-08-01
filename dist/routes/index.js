"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We need to import the router from express. 
const express_1 = require("express");
// We need to import the functions we made in the controllers\index.ts file.
const controllers_1 = require("../controllers/");
const controllers_2 = require("../controllers/");
// Create a new router object.
const routes = (0, express_1.Router)();
// Here, we will add a git to the router. 
// The router will handle any requests that come to the '/' path.
// The '/' path is the root path. It is the path that comes after the domain name.
// For example, if the domain name is 'www.google.com', the root path would be 'www.google.com/'.
// We also need to make another path for the other function we made.
routes.get('/', controllers_1.rykerFunction);
routes.get('/ryker', controllers_2.returnAnotherRyker);
// Now, we need to export the router object.
exports.default = routes;
