# CSE341 Lesson 4 Class Activity Solution

## Steps to Set Up the Solution

1. Clone the specific branch of the repository:
   ```
   git clone https://github.com/byui-cse/cse341-ts-student.git
   git checkout L04-class-complete
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the project root and add your MongoDB connection string:
   ```
   MONGODB_URI = connectionstring
   ```

4. Create a collection called "books" in your MongoDB database and import the `books.json` file into this collection.

5. Start the server:
   ```
   npm start
   ```

Now, you can navigate to `localhost:3000/api-docs` to see your working Swagger documentation.

