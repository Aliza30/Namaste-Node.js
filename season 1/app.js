var a = 1;
var b = 10;
console.log(a + b);
// console.log(global);


const { sum, multi } = require("./Module-export Feature/index.js");

sum(a, b);
multi(a, b);

//-----------------------getting data.json file-----------------------------------------
const data = require("./data.json");
console.log(JSON.stringify(data));
