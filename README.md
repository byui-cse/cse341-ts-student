# CSE341 Lesson 5 Class Activity

## Steps to complete activity

- Create a GitHub repository.
- Clone it on your computer and open it in VS Code.
- Run `npm init` to start a new Node.js project.
- Create a simple `server.ts` file like we've done previously.
- In your same MongoDB account, create a new database.
- Create an `.env` file with your `MONGODB_URI`.
- Connect to MongoDB in your Node.js project.
- Create a `Swagger.json` that contains a single API route that represents the following GET request:  
  [https://localhost:8080?name=sarah](https://localhost:8080?name=sarah). This is just to give you practice designing a Swagger API route without generating one from existing code. This will not connect to the database, and will consist of a very simple Node.js API route.
- Add the Swagger route to your Node.js project routes, and test it locally.
- Push to GitHub.
- Create a new Render project, and connect it to your GitHub repository. (Replacing Heroku with Render)
- Set up automatic deploys from your default branch (or another of your choice).
- Modify the `Swagger.json` to reference your Render URL instead of localhost and to use HTTPS instead of HTTP.
- Commit and push this change.
- Test on Render until it all works.

## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-ts-student/tree/L05-class-complete)
