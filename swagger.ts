import swaggerAutogen from 'swagger-autogen';
const doc = {
  info: {
    title: 'API',
    description: ''
  },
  host: 'localhost:8080',
    schemes: ['http']
  //host: 'ts-test-lr62.onrender.com',
  //schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.ts','./controllers/user.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);