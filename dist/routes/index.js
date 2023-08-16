"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/user', (req, res) => {
    var _a;
    const response = { reversed: (_a = req.query.name) === null || _a === void 0 ? void 0 : _a.toString().split('').reverse().join('') };
    res.status(200).json(response);
});
const swagger_1 = __importDefault(require("./swagger"));
router.use('/', swagger_1.default);
exports.default = router;
