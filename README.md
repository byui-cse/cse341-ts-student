# TypeScript with Express Setup Guide

Follow these steps to create a basic Express application using TypeScript:

## 1. Create a New Folder
- Create a new folder on your computer.
- Open it in Visual Studio Code.

## 2. Initialize NPM
- Open the terminal inside VS Code.
- Run the command:
  ```
  npm init
  ```
- Go through the CLI prompts to create the `package.json` file.

## 3. Create Main File
- Create `server.ts` (or your chosen main file name).

## 4. Install Dependencies
- Add the following dependencies and devDependencies to your `package.json`:

  ### dependencies:
  ```json
  "express": "^4.18.2"
  ```

  ### devDependencies:
  ```json
  "@types/express": "^4.17.17",
  "@types/node": "^20.4.2",
  "nodemon": "^3.0.1",
  "typescript": "^5.1.6"
  ```
- Run:
  ```bash
  npm install
  ```

## 5. TypeScript Configuration
- Create a `tsconfig.json` file with the following content:
  ```json
  {
    "compilerOptions": {
      "esModuleInterop": true,
      "outDir": "./dist",
      "rootDir": "./",
      "target": "es2016",
      "module": "commonjs",
      "forceConsistentCasingInFileNames": true,
      "strict": true
    }
  }
  ```

## 6. Create an Express App in `server.ts`
- Create an Express app that listens on either `process.env.PORT` or `3000`.

## 7. Start the Server
- Run `npm start`.

## 8. Create Controllers and Routes
- Create a controllers folder with a file called `index.ts`.
- Create a single function in `index.ts` that will return data.
- Create a routes folder with a file called `index.ts`.
- Implement the route in `index.ts` that will call the function in the controller.

## 9. Test the Application
- Test the application in the browser at `localhost:3000`.

That's it! You've created a basic Express application using TypeScript.


[GitHub Repo](https://github.com/byui-cse/cse341-ts-student/tree/L01-class-complete)
