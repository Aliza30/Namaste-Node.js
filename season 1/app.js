var a = 1;
var b = 10;
console.log(a + b);
// console.log(global);

const { sum, multi } = require("./Module-export Feature/index.js");

sum(a, b);
multi(a, b);

//-----------------------getting data.json file-----------------------------------------
const data = require("./data.json");
// console.log(JSON.stringify(data));
console.log(data.name, data.age, data.city, data.course);
// console.log(`${data.name}\n${data.age}\n${data.city}\n${data.course}`);

//----------------------------set time out -----------------------------------------
setTimeout(() => {
    console.log("After 4 seconds");
    console.log(data.name, data.age, data.city, data.course);
}, 4000);

