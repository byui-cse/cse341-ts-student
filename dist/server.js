"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_openid_connect_1 = require("express-openid-connect");
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = __importDefault(require("./User"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
};
app.use((0, express_openid_connect_1.auth)(config));
mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb://localhost/myapp', {});
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
app.get('/profile', (0, express_openid_connect_1.requiresAuth)(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});
app.get('/users', (0, express_openid_connect_1.requiresAuth)(), (req, res) => {
    try {
        User_1.default.find({})
            .then((data) => {
            res.status(200).send(data);
        })
            .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users.'
            });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
