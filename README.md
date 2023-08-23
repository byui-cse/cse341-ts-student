# CSE341 Lesson 3 Class Activity

## Required Packages

Ensure that you have the following devDependencies and dependencies for a TypeScript project:

### Dev Dependencies

- `typescript`
- `nodemon`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `prettier`
- `@types/express`
- `@types/node`

### Dependencies

- `body-parser`
- `dotenv`
- `express`
- `mongodb`

## Steps to Complete Activity

1. Use your assignment submission for lesson 2 as a starting point. If that's not an option, you may adopt [this code](https://github.com/byui-cse/cse341-ts-student/tree/L02-personal-solution).
   
2. Install the required packages listed above.

3. Follow the steps listed in [this article](https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b), but note the following:
   - Use Node and JSON (not Browser and JavaScript).
   - Don't include anything about React in your setup.
   - Add `"jest": true` if using Jest for testing.
   -  Select Yes when prompted Does your project use TypeScript? · No / Yes

## Scripts

Include the following scripts in your `package.json`:

```json
"scripts": {
  "build": "npx tsc",
  "start": "npm run build && nodemon dist/app.js",
  "lint": "eslint '**/*.ts'",
  "lint:fix": "eslint '**/*.ts' --quiet --fix",
  "format": "prettier --write '**/*.ts'"
}
```

### Explanation of Scripts

- `build`: Compiles TypeScript files into JavaScript using the TypeScript Compiler.
- `start`: Builds the project using the `build` script and then starts the application using `nodemon`, automatically restarting the app when files change.
- `lint`: Runs ESLint on TypeScript files to check for code quality and style issues.
- `lint:fix`: Automatically fixes fixable problems identified by ESLint.
- `format`: Formats TypeScript files using Prettier according to your code style preferences.

### Running the Scripts

- To build the project, run `npm run build`.
- To start the project, run `npm start`.
- To check for linting issues, run `npm run lint`.
- To automatically fix linting issues, run `npm run lint:fix`.
- To format your code, run `npm run format`.

## Solution

You can find a complete solution at the [GitHub Repo](https://github.com/byui-cse/cse341-ts-student/tree/L03-class-complete).
