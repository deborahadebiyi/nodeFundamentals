const fs = require('fs');

const file = fs.readFileSync('123.txt'); 
//using synchronous method to read the file and the path to the file
//is provided
const string = file.toString();
//using the synchronous method returns a buffer that has to be converted 
//to a string
const splitString = string.split('\n').length - 1
//the split method takes a delimiter which is the newline character in this case
// it also returns an array which you can use the length method on.
// 1 is being minused from the length becase the test file doesn't have a new line at the end of the
//last line

console.log(splitString);