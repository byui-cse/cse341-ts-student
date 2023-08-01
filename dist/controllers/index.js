"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayJoke = void 0;
// It receives two parameters: the request (req) and the response (res).
// This function does not return anything, hence the ': void' in its declaration.
const displayJoke = (req, res) => {
    const data = 'How did the telephone propose to his girlfriend? ...he gave her a ring.';
    res.status(200).send(data); // Send the joke back to the client with a status code of 200 (which means 'OK').
};
exports.displayJoke = displayJoke;
