# Repository Introduction

This repository contains a collection of code for students that take the CSE 341 course at Brigham Young University - Idaho.

## How to use this repository

Each branch contains a collection of code for a given assignment or class activity. Select a branch, and then either clone, fork, or download the zip file to access the files on your computer.
## Updated for TypeScript: CSE341 Lesson 7 Class Start

This repository contains a collection of TypeScript code for students taking the CSE 341 course at Brigham Young University - Idaho.

## Steps to complete activity
- Start here: [Auth0 Documentation](https://auth0.com/docs/) and follow the docs for backend node.js API.

### Detailed steps to complete activity
1. **Initialize a new Node.js project:**
   ```bash
   npm init -y
   ```

2. **Install the necessary packages:**
   ```bash
   npm install express express-openid-connect dotenv typescript @types/node @types/express @types/dotenv
   ```

3. **Initialize a new TypeScript configuration:**
   ```bash
   npx tsc --init
   ```

4. **In `tsconfig.json`, set the following configurations:**
   ```json
   {
     "target": "es6",
     "module": "commonjs",
     "outDir": "./dist",
     "rootDir": "./src",
     "strict": true,
     "esModuleInterop": true
   }
   ```

5. **Create a `.env` file.**

6. **Sign up for a free Auth0 account.**

7. **Create an application in Auth0:**
   - Click on `Settings`.
   - "Allowed Callback URLs": `http://localhost:3000/callback`
   - "Allowed Logout URLs": `http://localhost:3000`
   - Scroll to the bottom and save.

8. **Create a `server.ts` file in a new `src` directory in your Node.js project.**

9. **Set up your express app in `server.ts` and listen on a port.**

10. **Use `dotenv` to grab values from the `.env` file:**
   - ISSUER_BASE_URL - domain
   - CLIENT_ID - client id
   - BASE_URL - `http://localhost:3000`
   - SECRET - any string of 32 characters or more

11. **Copy the `app.use auth()` from the Auth0 docs.**

12. **Check `http://localhost:3000/login` - you should be able to log in.**

13. **Create a route for the homepage `/` in `server.ts`.**

14. **Send a response based on authentication status:**
   ```typescript
   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
   ```

15. **Update `auth({})` with the following configurations:**
   ```typescript
   {
     authRequired: false,
     auth0Logout: true
   }
   ```

16. **Create a route for `/profile` in `server.ts` to test middleware.**

17. **Compile TypeScript files:**
   ```bash
   npx tsc
   ```

18. **Run the server after setting up the package.json scripts with npm start:**
   ```bash
    "scripts": {
        "build": "tsc",
        "start": "npm run build && node dist/server.js"
    },
   ```

## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-ts-student/tree/L07-class-complete)
