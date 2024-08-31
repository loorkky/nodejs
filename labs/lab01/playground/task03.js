const os = require('os');

let userName = os.userInfo().username;

let greeting = `Hello, ${userName}!`;

console.log(greeting);