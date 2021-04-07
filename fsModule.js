const fs = require('fs'); // this is the fs module

//asynchronous methods require callback functions

//Reading a file
var readMe = fs.readFileSync('readable.txt', 'utf8')
/*THIS is blocking code (synchronous)
the parameters for the readFileSync are the path to the file and the file type */
console.log(readMe);

fs.readFile('readable.txt', 'utf8', function(err, data){
    fs.writeFile('written.txt', data)
})
/*this is the non blocking way (asynchronous) 
*/


//Writing a file
fs.writeFileSync('write.txt', readMe);
/*THIS is blocking code (synchronous)
The first parameter is where the contents is being written to, 2nd parameter is the data you want to write*/

//Deleting a file
fs.unlink('');
/*the parameter is the name of the file you want to delete */

//Creating a folder
fs.mkdirSync('')
/*THIS is blocking code (synchronous)
the parameter is the name of the folder you want to add */

fs.mkdir('asyncDir', function(){
    fs.readFile('readable.txt', 'utf8', function(err, data){
        fs.writeFile('./asyncDir/write.txt', data);
    })
})


//Deleting a folder
fs.rmdirSync('')
/*THIS is blocking code (synchronous)
the parameter is the name of the folder you want to delete */