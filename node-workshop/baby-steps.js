// console.log(process.argv)
/*process is used to access the command lind arguments and is a global object
the process object has an argv property - it's value is an array containing
the complete command line */

/*when you run the program with node, it returns an array with the first value always being node
then the second value being the path to the file.
Another thing to be mindful of is that all elements of process.argv are strings so they have to be 
coerced into being a number by passing it to the Number() object */

let sum = 0;

for(let i = 2; i < process.argv.length; i++){
    sum += Number(process.argv[i]);
}
console.log(sum)

// let sum = Number(process.argv[2]);

// for(let i = 3; i < process.argv.length; i++){
//     start += Number(process.argv[i]);
// }
// console.log(start)


