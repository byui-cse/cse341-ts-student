# CSE341 Lesson 4 Class Activity

## Steps to complete activity

### Populate Database

- Create a collection in your MongoDB database called "books."
- Import the book.json into this collection. You won't use the book.json file for anything else in this activity.

### swagger-autogen

- Clone this repository onto your computer.
- Run `npm install` to install the dependencies.
- Create a new database in your MongoDB account.
- Add a .env file and assign your MongoDB URL to the variable `MONGODB_URI` (ensure that your URI is connecting to the correct database in MongoDB).
- Install swagger-autogen to the project with `npm install --save swagger-autogen`.
- Install ts-node with `npm install --save ts-node`.
- Add a swagger-autogen script to your package.json to run `"swagger": "ts-node swagger.ts"`.
- Create a swagger.ts file. Following the swagger-autogen documentation, add a constant for the document, output file, and an array of endpoints. (Hint: since this project uses express router, the only thing you'll need in the endpoint array is a path to the server.ts file.)
- Run your swagger script: `npm run swagger`. You'll know it worked when the output JSON file appears populated with the project routes.

### swagger-ui-express

- Install swagger-ui-express with `npm install --save swagger-ui-express`.
- Add the dev dependency for the types with `npm install --save-dev @types/swagger-ui-express`.
- In the `server.ts` file, import swaggerUi from 'swagger-ui-express'.
- Import SwaggerDocument from './swagger.json'.
- Add the following two lines to set up the API docs route:
    ```typescript
    app.use('/api-docs', swaggerUi.serve);
    app.get('/api-docs', swaggerUi.setup(SwaggerDocument));
    ```
- That's it! Start your server and navigate to localhost:8080/api-docs to see your working Swagger documentation.

**Note**: Make sure to include `"swagger": "ts-node swagger.ts"` in the `scripts` section of your `package.json` file as part of the swagger-autogen setup.

## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-ts-student/blob/L04-class-complete)
