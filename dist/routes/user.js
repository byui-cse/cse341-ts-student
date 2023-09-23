"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../controllers/user")); // Assuming default export
const userRouter = express_1.default.Router();
userRouter.get('/', user_1.default.getAll);
userRouter.get('/:username', user_1.default.getUser);
userRouter.post('/', user_1.default.create);
userRouter.put('/:username', user_1.default.updateUser);
userRouter.delete('/:username', user_1.default.deleteUser);
exports.default = userRouter;
