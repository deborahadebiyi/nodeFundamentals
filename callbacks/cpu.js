const fs = require("fs");

const start = process.hrtime.bigint();
console.log(Math.sqrt(256))
const end = process.hrtime.bigint();
console.log(`took: ${((end - start) / BigInt(1e6))}ms`);
