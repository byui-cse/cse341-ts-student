"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../config/db.config"));
const mongoose_1 = __importDefault(require("mongoose"));
const theme_1 = __importDefault(require("./theme"));
const user_1 = __importDefault(require("./user"));
const db = {
    mongoose: mongoose_1.default,
    url: db_config_1.default.url,
    theme: theme_1.default,
    user: user_1.default,
};
exports.default = db;
