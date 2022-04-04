# Backend-Engineering-with-Node.js

Backend Engineering with Node.js (Tecognize Training)

## Class 00

- Task
  - [x] JavaScript Fundamentals
  - [x] Http Protocol
  - [x] API
- Resources
  - JavaScript Fundamentals: https://javascript.info

## Class 01

- Topics
  - [x] JavaScript Fundamentals
- Task
  - [x] Callback
  - [x] Promises
- Resources
  - [x] Javascript Promises and async/await Tutorial (Hussein Nasser): https://youtu.be/yTh6q-k2bEA
  - [x] JavaScript Callback: https://javascript.info/callbacks
  - [x] JavaScript Promise: https://javascript.info/promise-basics
- Notes
  - callback function
  - "error-first callback" style
  - "callback hell" / "pyramid of doom"
  - promise, .then() / .catch() / .finally()

## Class 02

- Topics
  - [x] Callback
  - [x] Promises
  - [x] Async/Await
  - [x] npm Package Manager
  - [x] "axios" external package
- Task
  - JavaScript Data Type
- Resources
  - JavaScript Data Types: https://javascript.info/data-types
  - The Rick and Morty API: https://rickandmortyapi.com/documentation

## Class 03

- Topics
  - Node Module System
    - CommonJS
    - ECMAScript
  - Object Destructuring
  - Module Wrapper Function
  - Type of Module
    - Built-in module
    - External Module
  - "http" module
  - Node Package Manager -> npm
  - npmjs.org
  - Major.Minor.Patch -> Semantic Versioning
- Notes
  - every js file -> module
  - "global" Object
  - "module" Object
  - "module.exports" Object
  - ```js
    (exports, require, module, __filename, __dirname) => {
      // Module code actually lives in here
      return module.exports;
    };
    ```
  - package.json "type": "commonjs" or "module"
  - "commonjs" -> Synchronous
  - "module" -> Asynchronous
  - npm Commands
    ```sh
    npm init -y
    npm --version  # npm -v
    npm install axios  # npm i axios
    npm install  # npm i
    npm list
    npm root
    npm uninstall axios  # npm un axios
    npm install moment@2.28.0
    npm install --save-dev nodemon  # npm i -D nodemon
    npm outdated
    npm update
    npm adduser
    npm login
    npm publish
    npm version patch
    npm version major
    ```
  - "dependencies" key in package.json
  - '1.1.3' -> Major.Minor.Patch
  - "devDependencies" key in package.json
  - '^' -> Caret Sign -> Latest minor version
  - '~' -> Tilde Sign -> Latest patch version
- Resources
  - Module wrapper: https://nodejs.org/api/modules.html#the-module-wrapper
  - Determining module system: https://nodejs.org/api/packages.html#determining-module-system
  - https://nodejs.org/api/modules.html#enabling
  - https://nodejs.org/api/modules.html
