"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const routes = (0, express_1.Router)();
routes.get('/', users_1.getUser);
routes.get('/username', users_1.getUsername);
exports.default = routes;
