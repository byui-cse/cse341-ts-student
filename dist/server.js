"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// We need to import express.
const express_1 = __importDefault(require("express"));
// We need to import our routes from the routes folder.
const routes_1 = __importDefault(require("./routes"));
// We need to create a new express application.
const app = (0, express_1.default)();
// We will need to create a function for If there is a port 
// in an enviorment variable, which render uses, then it will use that port. If not, it uses localhost3000.
const port = process.env.PORT || 3000;
// Now we need to comminicate to the program that we are using the routes we defined.
// AKA anything after the root path.
app.use('/', routes_1.default);
// We need to tell our app to listen for requests on the specified port.
// To do this, we will use the listen method on our app object.
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
