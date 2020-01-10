https://blog.angular-university.io/typescript-2-type-system-how-do-type-definitions-work-in-npm-when-to-use-types-and-why-what-are-compiler-opt-in-types/
# Create the project
npm init
.... hit enter to all questions 
    
# install Typescript locally, inside node_modules
npm install --save-dev typescript

# setup a Typescript compiler configuration file tsconfig.json
./node_modules/.bin/tsc --init

# install uuid
npm install --save uuid

# An easy way to run Typescript files
### install ts-node
npm install --save-dev ts-node
### Add this to the package.json file
```
 "scripts": {
    "demo": "./node_modules/.bin/ts-node ./test.ts"
  },
```
#### Run this at the command line
```
npm run demo
```