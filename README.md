# Lesson 12 Class Activity: TypeScript Testing with MongoDB

This activity is designed to practice writing tests in TypeScript for Node.js projects that interact with MongoDB.

## Getting Started

To begin with the Lesson 12 class activity, you can either clone the specific branch from the GitHub repository or use your completed Lesson 11 code. Be sure that you have all the right dependencies installed.

### Download Starter Code

Clone the specific branch from the GitHub repository:

```bash
git clone --branch L12-class-start https://github.com/byui-cse/cse341-ts-student.git
cd cse341-ts-student
npm install
npm test
```

### Install Additional Dependencies

Install development dependencies for TypeScript testing:

```bash
npm install --save-dev typescript jest ts-jest @types/jest @shelf/jest-mongodb
npm install @types/mongodb
```

## Writing Tests

Follow the Jest documentation for guidance on working with MongoDB:

- Write a test for inserting a user into MongoDB.
- Write a test for deleting a user from MongoDB.
- Compare your solution with the `mongo.spec.ts` file in the sample solution.

## Stretch Goals

Challenge yourself by:

- Considering other aspects of MongoDB that could be tested.
- Adding more routes to your project and writing tests for them.

## Solution

View the code solution for this activity on GitHub:

https://github.com/byui-cse/cse341-ts-student/tree/L12-class-complete



