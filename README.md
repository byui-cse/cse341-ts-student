# CSE341 Lesson 4 Class Start

## How to Clone the Repository and Switch to the Right Branch

1. Open a terminal or command prompt.
2. Run the following command to clone the specified branch:
   ```bash
   git clone -b L04-class-start https://github.com/byui-cse/cse341-ts-student.git
   ```
3. Navigate to the cloned repository's directory:
   ```bash
   cd cse341-ts-student
   ```

## Set Up the Project

1. Download this project as your starting point.
2. Examine the code. For this assignment, you will only worry about the temple routes.
3. Create a new collection in MongoDB called temples.
4. Import the temples.json file into your new temples collection.
5. Adjust the .env file so that you can successfully run `npm start` and connect to the database.
6. Run the following commands to install the required packages:
   ```bash
   npm install
   ```

## Swagger Configuration

1. Create a new Swagger file and add documentation for each route you see there. There are many ways to do this, but this [swagger-autogen](https://www.npmjs.com/package/swagger-autogen) package may be useful.
2. Generate a visual UI and living documentation of your swagger.json. There are many ways to do this, but this [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) package may be useful.

## Additional Steps

1. Now that you have documented the routes that are existing, talk with your team about what routes are missing. Add these routes to the API documentation.
2. Regenerate your swagger.json, and restart your server. Test these routes in the Swagger UI by selecting the "Try it Out" then "Execute" buttons.
3. Once completed, review the sample solution below and compare/contrast your findings.
4. Use the I-Learn quiz to report your participation in this activity.

## Starting the Server

1. Start the server:
   ```bash
   npm start
   ```
