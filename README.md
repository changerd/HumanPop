# HumanPop
simple training project with core 3.1 / react / redux

structure of table in database:
1. FirstName(string)
2. SurName(string)
3. City(string)
4. Age(int)
5. DateOfBirth(Date)
6. UserId

## Installation

For develop need install: 

[Node.js](https://nodejs.org/) v12 

Microsoft Visual Studio

## Start

Before deploying the application, you need to install npm packages.
To do this, go to the root folder of the project and run the command in the console:

```
npm install
```

## Packages Node.js

package.json:

```
{
  "name": "humanpop",
  "version": "1.0.0",
  "description": "hello all people from earth",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Sl",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.6.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.16.0",
    "babel-preset-stage-0": "^6.24.1",
    "aspnet-webpack": "^2.0.3",
    "css-loader": "^0.28.7",
    "file-loader": "^1.1.6",
    "style-loader": "^0.19.1",
    "webpack": "^3.11.0"
  },
  "dependencies": {
    "babel-polyfill": "^6.26.0",
    "isomorphic-fetch": "^2.2.1",
    "query-string": "^5.0.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.6",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "redux-thunk": "^2.2.0"
  }
}
```

