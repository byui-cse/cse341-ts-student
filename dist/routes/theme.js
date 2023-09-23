"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const theme_1 = __importDefault(require("../controllers/theme")); // Assuming default export
const themeRouter = express_1.default.Router();
themeRouter.get('/:themeName', theme_1.default.getTheme);
exports.default = themeRouter;
