"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
app
    .use(body_parser_1.default.json())
    .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
    .use('/', routes_1.default);
const models_1 = __importDefault(require("./models"));
models_1.default.mongoose.connect(models_1.default.url, {})
    .then(() => {
    app.listen(port, () => {
        console.log(`DB Connected and server running on ${port}.`);
    });
})
    .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
});
