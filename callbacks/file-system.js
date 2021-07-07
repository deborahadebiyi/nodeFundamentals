const fs = require("fs");

const start = process.hrtime.bigint();

fs.readFile("./bollocks.txt", (err, data) => {
  console.log(data.toString());
  const end = process.hrtime.bigint();
  console.log(`took: ${((end - start) / BigInt(1e6))}ms`);
});
