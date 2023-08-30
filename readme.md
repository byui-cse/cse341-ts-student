# CSE 341 TypeScript Express Application Guide - L02 Personal Solution

This tutorial is for students of the CSE 341 course at Brigham Young University - Idaho. It provides instructions to run a simple Express server using TypeScript and MongoDB for managing contacts. This guide is specific to the L02-personal-solution branch.

## Getting Started

### Step 1: Clone the Repository

Clone the L02-personal-solution branch to your local machine using the following command:

```bash
git clone -b L02-personal-solution https://github.com/byui-cse/cse341-ts-student.git
```

### Step 2: Create .env File

Create a `.env` file in the root directory of the project and add the following line:

```env
MONGODB_URI=your_connection_string_here
```

Replace `your_connection_string_here` with your actual MongoDB connection string.

### Step 3: Update .gitignore

Add the `.env` file and `node_modules/` directory to the `.gitignore` file to prevent them from being committed to the repository.

```
.env
node_modules/
```

### Step 4: Install Dependencies

Navigate to the project folder and install the required dependencies:

```bash
cd cse341-ts-student
npm install
```

### Step 5: Understand the Main Files

#### app.ts

- Sets up the Express application.
- Initializes the database.
- Defines the port.
- Adds router middleware.
- Starts the server.

#### db/connect.ts

This file is responsible for connecting to the MongoDB database. The main code and explanation are as follows:

```typescript
import dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';

dotenv.config();

let _db: Db | undefined;

const initDb = (callback: (error: Error | null, db?: Db) => void) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI as string)
    .then((client: MongoClient) => {
      _db = client.db();
      callback(null, _db);
    })
    .catch((err: Error) => {
      callback(err);
    });
};

const getDb = (): Db | undefined => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

export {
  initDb,
  getDb,
};
```

Here, 'dotenv' is used to load the MongoDB connection string from the `.env` file, and 'MongoClient' is used to establish a connection to the database. The 'initDb' function is used to initialize the connection, and 'getDb' retrieves the existing connection.

#### controllers/contacts.ts

- Contains handlers for managing contacts.

#### routes/contacts.ts & routes/index.ts

- Define the routes for managing contacts.

#### package.json

- Defines dependencies and devDependencies.

### Step 6: Run the Application

Build and run the server using the following command:

```bash
npm start
```

Your server will start, and you can access it at `http://localhost:<port>`, where `<port>` is either the value of the environment variable `PORT` or 8080 by default.

### Step 7: Add Contacts to MongoDB Compass

In this step, you'll add the contacts to MongoDB Compass by creating a new database and a collection. You'll need the following JSON content:

```json
{
  "contact": {
    "firstName": "Sarah",
    "lastName": "Birch",
    "email": "amazingwoman@test.com",
    "favoriteColor": "Green",
    "birthday": "12/12/20"
  },
  "contact2": {
    "firstName": "Jimmy",
    "lastName": "Carter",
    "email": "jCarter@test.com",
    "favoriteColor": "Purple",
    "birthday": "07/12/10"
  },
  "contact3": {
    "firstName": "Cassandra",
    "lastName": "Anderson",
    "email": "AndersonC@test.com",
    "favoriteColor": "Yellow",
    "birthday": "02/22/95"
  }
}
```

Follow the steps below to add the contacts to MongoDB Compass:

1. Open MongoDB Compass.
2. Create a new database.
3. Create a new collection within the database, it must match the collection name specified in contacts.ts in the controllers directory, in this case its 'contacts'.
4. Copy and paste the JSON content above into the collection.

For detailed step-by-step instructions, please refer to [this video tutorial](https://youtu.be/N6DC0uQ6c-k?si=bWtSJ1pkI-AMvBY4&t=157).


## Deploy to Render

You can deploy your TypeScript Express application to [Render](https://dashboard.render.com/), following similar steps as described for L01 and adjusting for this specific project.

Note: Ensure configurations in `tsconfig.json` and `package.json` are correctly set up as Render will use these during the build and deploy process.

## Links
[Video Tutorial](https://www.youtube.com/watch?v=bDzLafY9sRE)
