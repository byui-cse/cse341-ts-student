const swaggerAutogen = require('swagger-autogen')();
const express = require("express");
const app = express();

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};


const outputFile = './swagger.json';
const endpointsFiles = ['./server.ts'];



swaggerAutogen(outputFile, endpointsFiles, doc);