// created after running tsc index.ts 
// this is the compiled version of index.ts
// to run this file, run node index.js
"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
