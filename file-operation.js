const fs = require('fs');

const fileBuffer = fs.readFileSync('123.txt');
const fileData = fileBuffer.toString();

console.log('Message:', fileData)