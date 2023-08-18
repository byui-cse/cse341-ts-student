# CSE 341 TypeScript Express Application Guide

This tutorial is for students of the CSE 341 course at Brigham Young University - Idaho. It provides instructions to run a simple Express server using TypeScript.

## Getting Started

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```
git clone -b L01-personal-solution https://github.com/byui-cse/cse341-ts-student.git
```

### Step 2: Install Dependencies

Navigate to the project folder and install the required dependencies:

```
cd cse341-ts-student
npm install
```

### Step 3: Understand the Main Files

#### server.ts

This file sets up the Express server, defines the port, adds the router middleware, and starts the server.

#### index.ts (inside the routes folder)

This file creates a new Router instance, defines a GET route for the path `'/'`, and exports the router.

#### package.json

This file includes the project's metadata, dependencies, and scripts to build and run the application.

### Step 4: Run the Application

Build and run the server using the following command:

```
npm start
```

Your server will start, and you can access it at `http://localhost:<port>`, where `<port>` is either the value of the environment variable `PORT` or 8080 by default.

## Key Files Explanation

### server.ts

- Imports Express and the Router instance.
- Creates an Express application instance.
- Defines the port and starts listening.
- Uses the router instance as middleware to handle HTTP requests.

### index.ts (routes folder)

- Creates and exports a router instance.
- Defines a GET route that sends 'Sarah Birch' as the response.

### package.json

- Defines scripts, dependencies, and devDependencies.
- `build`: Compiles the TypeScript code.
- `start`: Builds and starts the server.
