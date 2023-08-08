"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const professional_1 = require("../controllers/professional");
const router = express_1.default.Router();
router.get('/professional', (req, res) => {
    (0, professional_1.getData)(req, res);
});
exports.default = router;
