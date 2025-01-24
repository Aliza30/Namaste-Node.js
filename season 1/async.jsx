const https = require('https');
const fs = require('fs');

var a = 100;
var b = 12;
console.log(a + b); //1

setTimeout(() => {
    console.log("After 3 seconds");
}, 3000); //6

https.get("https://dummyjson.com/quotes", (res) => {
    console.log("fetched Data")
}) //5


fs.readFile("../file.txt", "utf8", (err, data) => {
    console.log("fetched data: ", data);
})

// console.log(global);

const { sum, multi } = require("./Module-export Feature/index.js");

sum(a, b); //3
multi(a, b); //4
