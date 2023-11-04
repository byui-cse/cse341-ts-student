# Lesson 8 Class Start

The code for this class activity contains a simple GET request which retrieves data from a MongoDB collection. The goal of this activity is to add OAuth to this route to protect it from unauthorized users.

## Steps to run activity

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/byui-cse/cse341-ts-student/tree/L08-class-complete
    ```

2. Navigate into the directory:
    ```bash
    cd L08-class-complete
    ```

3. Install dependencies:
    ```bash
    npm install
    ```
4. Add your MONGODB_URI to the .env file.

5. Run the server:
    ```bash
    npm run swagger
    npm start
    ```


#### Creating the request

-This program creates simple GET request which will retrieve data from a MongoDB collection of your choice (Be sure to create an .env file for your MONGODB URI) and to have a USER in your mongodb database. You can update the code to retrieve data from a different collection, be sure to update the modal(USER.ts) and the get request in server.ts

#### Swagger documentation and testing

- Create a Swagger.json file for this route. You may use [swagger-autogen](https://www.npmjs.com/package/swagger-autogen) if you wish.
- Create an "/api-docs" route like we've done before so that you can access the swagger ui. You may use [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) if you wish.
- Test the GET request with your swagger ui to ensure it works.

#### Incorporating OAuth

- Go to /login again and log in. If you go back to /api-docs and test out your route, it will work if you followed the steps!

## Solution

[GitHub Repo](https://github.com/byui-cse/cse341-code-student/tree/L08-class-complete)
