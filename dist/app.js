"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const PORT = 8080;
const app = (0, express_1.default)();
// Routes import
const login_1 = __importDefault(require("./routes/login"));
const userinfo_1 = __importDefault(require("./routes/userinfo"));
app.use(express_1.default.json());
// This is to allow CORS, you could use the cors package instead
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    // This is to allow preflight request so that we can send authorization header
    if (req.method === "OPTIONS") {
        res.sendStatus(200);
    }
    else {
        next();
    }
});
// Routes
app.use("/login", login_1.default);
app.use("/userInfo", userinfo_1.default);
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});
