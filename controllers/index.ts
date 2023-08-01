// We need to import Request and Response from express to be able to use them.
import { Request, Response } from 'express';


// Typscript allows us to specify the type of the parameters and the return value of a function.
// We could simply use req and res, but the more proper way to type them would be Request and Response.
// This function takes a Request and a Response object as parameters, it does not return anything.
// We use void to specify that it does not return anything.
// The function is called rykerFunction.
// In this function, we can place anything we want to do when the client sends a GET request to the '/' path.
// For this lesson, we are asked to write a name of someone we know.
// I am going to write the name of my wife Corinne.
// Note that we need to send the response back to the client. When the response is sent, the function will end.
// 200 is the status code for 'OK'. It means that the request was successful.
const rykerFunction = (req: Request, res: Response): void => {
  const data =
    'Corinne Swensen';
  res.status(200).send(data);
};

// This function is called returnAnotherRyker.
// Here we will return a name of someone else I know. 
// I will enter my best friend. His name is Bubba Moon.

const returnAnotherRyker = (req: Request, res: Response): void => {
    const data =
      'Bubba Moon';
    res.status(200).send(data);
  };
// Export the displayJoke function so it can be imported in other modules (files).
export { rykerFunction, returnAnotherRyker };