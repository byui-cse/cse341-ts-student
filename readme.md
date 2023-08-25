# CSE341 Lesson 4 Personal Solution
## How to Clone the Repository

1. Open a terminal or command prompt.
2. Run the following command to clone the specified branch:
   ```bash
   git clone -b L04-personal-solution https://github.com/byui-cse/cse341-ts-student.git
   ```

## Environment Setup

1. Navigate to the cloned repository's directory.
2. Create a `.env` file in the root folder with the following content:
   ```env
   MONGODB_URI=YourconnectionString
   ```
   Replace `YourconnectionString` with your MongoDB connection string.

## How to Run the Application

1. Navigate to the project's root directory:
   ```bash
   cd cse341-ts-student
   ```
2. Run the following commands to install the required packages and start the application:
   ```bash
   npm install
   npm start
   ```

## Testing

Test the endpoints in the `routes.rest` file with Rest Client or another similar tool.

### Video Tutorial

[Video Example for Students without showing all code](https://www.youtube.com/watch?v=MhObHmqk58U)
