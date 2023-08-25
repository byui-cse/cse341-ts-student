# CSE341 Lesson 4 Team Complete

## How to Clone the Repository and Switch to the Right Branch

1. Open a terminal or command prompt.
2. Run the following command to clone the specified branch:
   ```bash
   git clone -b L04-team-complete https://github.com/byui-cse/cse341-ts-student.git
   ```

## Set Up the Environment

1. Navigate to the cloned repository's directory:
   ```bash
   cd cse341-ts-student
   ```
2. Create a `.env` file in the root folder with the following content:
   ```env
   MONGODB_URI=YourconnectionString
   ```
   Replace `YourconnectionString` with your MongoDB connection string.
3. Run the following command to install the required packages:
   ```bash
   npm install
   ```

## Configure Database

1. Create a new collection in MongoDB called temples.
2. Import the temples.json file into your new temples collection.

## Start the Server

1. Start the server by running the following command:
   ```bash
   npm start
   ```


