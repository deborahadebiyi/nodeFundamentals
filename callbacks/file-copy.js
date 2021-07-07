const fs = require('fs');

fs.readFile('./bollocks.txt', (readError, data) => {
    if (readError) {
        console.log('There is an error.')
    } else {
        fs.writeFile('./bollocks-squared.txt', data, (writeError) => {
            if (writeError) {
                console.log('This is a write error.')
            } else {
                console.log('File successfully copied.')
            }
        })
    }
})

// const mycallback = (err, data) => {

// }

// mycallback(new Error('whatev'), null)
// mycallback(null, Buffer.from('test'))

//read bollocks.txt
//create a bollocks-squared.txt file 
