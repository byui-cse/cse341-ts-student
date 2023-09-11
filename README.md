# Setup Introduction

To get started, you will need to complete some initial setup. 

First, we need to get the front end code for this assignment.

[Front End Code](https://github.com/byui-cse/cse341-ts-student/tree/L02-RS-Team-Frontend)

DO NOT CHANGE ANY OF THE PROVIDED CODE!

Next we need to create a new node program. We will need the same installs as week 1. 
They are next if you need them, or skip to Assignment to move on.

### Installs
```sh
npm init -y
touch server.ts
npm install express
npm install typescript
npm install @types/express @types/node
npx tsc --init
```

### tsconfig.json
After running tsc --init, you should have a tsconfig.json file.
Open the new file.
Around line 52, you should see outDir, and it is commented out. 
Remove the comments, and replace the path to ./dist
Now, run:
```sh
npx tsc
```
You should now see the dist folder.
If you did not have it appear, run node dist/server.js. This should make it appear.
The dist folder is what we will use to transiple our typescipt back into JavaScript for the browser.

### package.json
Now, open package.json, and go to scripts.
Remove anything that was there. 
Lets add a build to transpile typescript to javascript
```json
"build": "npx tsc",
"start": "node dist/index.js"
```

Now, lets make that automated, so that we don't have to build every time and so that we don't need to refresh.

```sh
npm install -D nodemon
```

Now let's go back to the scripts, and lets add: 
```json
"serve": "npx tsc -w & nodemon dist/index.js"
```
The "W" stands for watch mode.
Right now, our dist folder is not being emptied after it is built. 
Let's make it so that it empties and is rebuilt each time it is ran.

```sh
npm install rimraf
```

Now, let's alter the build. 
```json
"build": "rimraf dist && npx tsx",
```

Now, let's add a prestart command to have commands called before we run start. 
```json
"prestart": "npm run build",
```


Let's do the same for serve and add a preserve:
```json
"preserve": "npm run build",
```

Now, to break this down, when we run npm start, it now runs the prestart, which runs the build. So, now when we run our 
code, the dist folder is emptied, and then the typescript is recompiled, then it runs the start command.

Now, let's add a package so that it runs concurrently. (This way it works on Windows and Linux)
```sh
npm install concurrently
```

Now, let's add this package to the serve command. 
```json
"serve": "concurrently \"npx tsc -w\" \"nodemon dist/index.js\""
```

Now, as we make changes to the program, everytime we save, the program will be updated and rerun. 
Just make sure you remember to run: 
```sh
npm run serve
```
Because of the way I set up my package.json, you will need to run npm run serve rather than run start. 
If you would rather do npm run dev, change the name from serve to dev, and preserve to predev.

# Assignment Directions

## Now You Are Ready To Code!