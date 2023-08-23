# Lesson 02 Class Activity Starting Code

This code begins where we left off with the lesson 01 personal assignment, updated for a TypeScript version.

The purpose of this activity is to give students experience working with MongoDB, as they will need to know how to do this for their personal assignments.

## Steps to Complete

- The starter code is a sample solution of the lesson 1 assignment.
- Run `npm install` to install dependencies listed in `package.json`.
- Run `npm start` to start the application. Keep the terminal open so you can see errors as you go through the following steps.
- Navigate to Mongodb.com and create a new database if you don't have one.
- Connect using MongoDB Compass. Ensure it is installed, and you can connect using your username and password.
- Create a collection called `user` and add one user that has a single field called `username` and a value.
- Create a folder in the root of your project called `db`.
- Create a file in `db/` called `connect.ts` following the hints below.
- We don't want to store sensitive database information in a JavaScript file directly. Move your sensitive db info to an environment variable file(a file named .env ) which will not go to GitHub or ever be published. You can get help setting this up with [this article](https://medium.com/@Hybeecodes/using-environment-variables-in-your-node-project-66f284cd9fe6).
- Modify `server.ts` to only `listen()` if MongoDB connected successfully.
- Create a route that will retrieve your user from the db.
- Notice that the logic involved to create this MongoDB request causes your route to become cluttered. Create a `controllers` folder with a file called `user.ts`.
- Create a function in the controller that will retrieve the user and return it as JSON when the route is requested.
- Test the route using Rest Client.
- Once this is working, create another route, and another controller function to only return the username of the user.

## Hints for connect.ts

- Import `dotenv`, `MongoClient`, and `Db` from the relevant modules.
- Load environment variables using `dotenv.config()`.
- Declare a variable that will hold the database connection, `_db`.
- Define an `initDb` function that will establish a connection with MongoDB, handling both success and failure cases.
- Define a `getDb` function to get the Db instance if it exists, handling the case where the Db instance does not exist.
- Export the `initDb` and `getDb` functions.

## Final File Structure

- `db/`
  - `connect.ts`
- `controllers/`
  - `user.ts`
- `routes/`
  - `index.ts`
- `server.ts`
- `tsconfig.json`
- `package.json`
- `.env` (for environment variables, should just contain MONGODB_URI = mongodb+srv://...)

## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-ts-student/tree/L02-class-complete)
