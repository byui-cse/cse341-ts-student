import express from 'express';
import temple from './temple';

const routes = express.Router();

routes.use('/temples', temple);
routes.use('/', (req, res) => {
  let docData = {
    documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
  };
  res.send(docData);
});

export default routes;
