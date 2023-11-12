# CSE341 Lesson JWT Class Activity - Backend

This repository contains the Node.js backend template for the Lesson 7 class activity focusing on JWT (JSON Web Token) authentication. It is designed to work with an existing frontend.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- Access to the frontend code: [Frontend Repository](https://github.com/byui-cse/cse341-code-student/tree/JWT-class-frontend).

### Initial Setup

1. Clone, fork, or download this repository.
2. Navigate to the project directory and run `npm i` to install dependencies.
3. Create a `.env` file in the root directory and add an `ACCESS_TOKEN_SECRET` variable with a value of your choice.
4. Ensure your backend server runs on port 8080 to align with the frontend setup.

### Steps to Complete the Activity

1. Familiarize yourself with the backend starter template.
2. Implement REST endpoints using POST for user login and GET for fetching user data.
3. Test your endpoints using the REST Client extension in VS Code.
4. In `controllers/login.ts`, create a `postLogin` function to handle user login:
   - Extract the email from the request body.
   - Use `jwt` to sign the email with `ACCESS_TOKEN_SECRET`.
   - Send the signed `accessToken` as a response.
5. Modify `modal/user.ts`:
   - Define a `User` interface with properties aligning with the frontend requirements.
   - Create an array of at least three users.
6. Use the provided [frontend code](https://github.com/byui-cse/cse341-code-student/tree/JWT-class-frontend). Open `index.html` with a live server.
7. Once your backend is functional with the REST Client, test it with the frontend webpage.

### Additional Information

- For more information on JWT and authorization, read [JWT.io - Introduction](https://jwt.io/introduction), starting from “How do JSON Web Tokens work?”.

### Running the Project

- Use `npm start` to build and run the application.

### Documentation

- Clean up and document your REST Client `.rest` file to serve as a guide for your backend's functionality.

### Solution
[Repository](https://github.com/byui-cse/cse341-ts-student/tree/JWT-class-complete)