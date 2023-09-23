"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_1 = __importDefault(require("./swagger"));
const user_1 = __importDefault(require("./user"));
const theme_1 = __importDefault(require("./theme"));
const mainRouter = express_1.default.Router();
mainRouter.use('/', swagger_1.default);
mainRouter.use('/user', user_1.default);
mainRouter.use('/theme', theme_1.default);
exports.default = mainRouter;
