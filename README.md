# Lesson 11 Class Activity Starting Code

The purpose of this activity is to help students practice writing tests for their Node.js projects using TypeScript.

## Steps to Complete

### Setup

- Look through the sample TypeScript code and get familiar with it.
- Run `npm install` to install dependencies.
- Create a `.env` file and add your own MongoDB connection string: `MONGODB_URI=<your connection string here>`.
- Install Jest and Supertest for TypeScript:
  - `npm install --save-dev jest @types/jest ts-jest`
  - `npm install --save-dev supertest @types/supertest`
- Add the following line to the scripts section of your `package.json`:
  - `"test": "jest --watch --coverage"`
- Create a `jest.config.js` file in your project root with the following content:

    ```javascript
    module.exports = {
        preset: 'ts-jest',
        testEnvironment: 'node',
        transform: {
          '^.+\\.ts$': 'ts-jest',
        },
        moduleFileExtensions: ['ts', 'js', 'json', 'node'],
        testMatch: ['**/?(*.)+(spec|test).ts'],
    };
    ```

### Route Tests

- Write tests for the `/users` GET and POST routes in TypeScript.
- Tests should be in the `__tests__` folder with a `.ts` extension (e.g., `routes.spec.ts`).
- Ensure your tests check for correct response status codes and content types.
- Useful resources:
  - [Jest with TypeScript](https://jestjs.io/docs/getting-started#using-typescript)
  - [Supertest with TypeScript](https://www.npmjs.com/package/supertest)

### [Solution](https://github.com/byui-cse/cse341-ts-student/tree/L11-class-complete)