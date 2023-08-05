import swaggerAutogen from 'swagger-autogen';
const doc = {
  info: {
    title: 'API',
    description: ''
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);