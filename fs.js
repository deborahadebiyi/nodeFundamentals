const { link } = require('fs');
const readFile = require('fs/readFile');

link('/tmp/hello', (err) => {
    if (err) throw err;
    console.log('succesfully deleted /tmp/hello')
});

//whenever you read a file you get a Buffer
