# L02 Class complete
## Description
This is the code base for the cse341 course, Lesson 2. It includes the setup of an Express server with MongoDB and provides endpoints to fetch user information.

## Getting Started

1. **Clone the repository**: Clone the repository using the following command:
   ```bash
   git clone https://github.com/byui-cse/cse341-ts-student.git
   ```

2. **Switch to the correct branch**: Change to the `L02-class-complete` branch:
   ```bash
   git checkout L02-class-complete
   ```

3. **Navigate to the project directory**: Change to the project's root directory:
   ```bash
   cd cse341-ts-student
   ```

4. **Install the dependencies**: Install the required dependencies with:
   ```bash
   npm install
   ```

5. **Start the server**: Run the server using:
   ```bash
   npm start
   ```
   This will build the project and start the server on port 3000 or the port defined in your environment variables.

## Project Structure

- **server.ts**: Main entry point for the application.
- **routes/index.ts**: Defines the routes for the Express app, including fetching user details.
- **controllers/users.ts**: Contains the logic to get user information from the database.
- **db/connect.ts**: Handles MongoDB connection and provides methods to interact with the database.
- **tsconfig.json**: TypeScript compiler options.
- **package.json**: Lists dependencies and scripts for the project.

## Usage

- **Access the API**: Open your browser and navigate to `http://localhost:3000/` to get user information. You can also use tools like Postman to interact with the API.
- **Get Username**: Navigate to `http://localhost:3000/username` to get the username of the user.


## Additional Information
1. Make sure to have a MongoDB connection URL defined in the `.env` file as `MONGODB_URI = your connection string`. 
2. Make sure to have added a user to the database with the collection called user and it should at least have a field named username.

