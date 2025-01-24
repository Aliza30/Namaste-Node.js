const fs = require('fs');
const crypto = require('crypto');

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", () => {
    console.log("1st Password hashed");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", () => {
    console.log("2nd Password hashed");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", () => {
    console.log("3rd Password hashed");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", () => {
    console.log("4th Password hashed");
});


// consept of thread pool and LibUv 
// there are by default 4 threads in Uv THREAD pool
// is JS a multithread or single threaded language?
/** 
 * Answer: Depends on the code, if u give a syncronous code then it will be single threaded
 * if u give asynchronous code then it will be multithreaded language it uses UV thread pool to handle the asyncronous code
 */