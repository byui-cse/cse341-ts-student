import express from 'express';
import temple from './temple';
import swagger from './swagger';

const routes = express.Router();

routes.use('/temples', temple);
routes.use('/', swagger);
routes.use('/docs', (req, res) => {
  let docData = {
    documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
  };
  res.send(docData);
});

export default routes;
