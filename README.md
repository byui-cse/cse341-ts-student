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

#### tsconfig.json

This file contains the configuration for the TypeScript compiler. Here's a brief explanation of some key settings:

- `esModuleInterop`: Enables better compatibility between CommonJS and ES6 module systems.
- `outDir`: Specifies the output directory for compiled JavaScript files.
- `rootDir`: Specifies the root directory of input files.
- `target`: Sets the JavaScript language version to compile to, in this case, ES2016.
- `module`: Specifies the module code generation method; using "commonjs" for compatibility with Node.js.
- `forceConsistentCasingInFileNames`: Ensures that casing is consistent in file names.
- `strict`: Enables strict type-checking options.

#### package.json

This file includes the project's metadata, dependencies, and scripts to build and run the application.

- `build`: Compiles the TypeScript code using the configuration from `tsconfig.json`.
- `start`: Builds and starts the server.

### Step 4: Run the Application

Build and run the server using the following command:

```
npm start
```

Your server will start, and you can access it at `http://localhost:<port>`, where `<port>` is either the value of the environment variable `PORT` or 8080 by default.

When you make custom scripts in the future, you can run them using `npm run <script-name>`. For example, to run the build script, you would use `npm run build`.

## Key Files Explanation

### server.ts

- Imports Express and the Router instance.
- Creates an Express application instance.
- Defines the port and starts listening.
- Uses the router instance as middleware to handle HTTP requests.

### index.ts (routes folder)

- Creates and exports a router instance.
- Defines a GET route that sends 'Sarah Birch' as the response.

### tsconfig.json

- Contains the TypeScript compiler configuration, ensuring the correct settings are applied during the build process.

### package.json

- Defines scripts, dependencies, and devDependencies.
- `build`: Compiles the TypeScript code following the `tsconfig.json` settings.
- `start`: Builds and starts the server using the compiled JavaScript.
