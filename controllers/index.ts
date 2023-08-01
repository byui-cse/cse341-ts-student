import { Request, Response } from 'express';


// It receives two parameters: the request (req) and the response (res).
// This function does not return anything, hence the ': void' in its declaration.
const displayJoke = (req: Request, res: Response): void => {
  const data =
    'How did the telephone propose to his girlfriend? ...he gave her a ring.';
  res.status(200).send(data);  // Send the joke back to the client with a status code of 200 (which means 'OK').
};

// Export the displayJoke function so it can be imported in other modules (files).
export { displayJoke };
