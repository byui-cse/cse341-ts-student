"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userinfo_1 = __importDefault(require("../controllers/userinfo"));
const authToken_1 = __importDefault(require("../middleware/authToken"));
const router = express_1.default.Router();
// GET INFO
router.get("/", authToken_1.default, userinfo_1.default);
// localhost:8080/userInfo/
exports.default = router;
