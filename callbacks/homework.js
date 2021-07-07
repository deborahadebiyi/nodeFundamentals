const fs = require('fs');

//1. Rename bollocks.txt to foo.txt
fs.rename('./callbacks/bollocks.txt', './callbacks/foo.txt', (renameError) => {
    if (renameError) {
        console.log('There is an error.')
    } else {
        console.log('Rename complete.')
    }
})

//2. Create two copies of foo.txt as bar.txt and baz.txt
fs.copyFile('./callbacks/foo.txt','./callbacks/bar.txt', (copyErr) => {
    if (copyErr) {
        console.log('There is a copy error')
    } else {
        fs.copyFile('./callbacks/foo.txt', './callbacks/baz.txt', (secondCopyErr) => {
            if (secondCopyErr) {
                console.log('This is a second copy error')
            } else {
                console.log('All copies successfully created')
            }
        })
    }
} )

//3. Delete baz.txt
fs.unlink('./callbacks/baz.txt', (deleteErr) => {
    if (deleteErr) {
        console.log('This is an error.')
    } else {
        console.log('File successfully removed.')
    }
})

//4. Create a new file named hello.txt with the content "hello world"
fs.writeFile('./callbacks/hello.txt', 'hello world', (writeErr) => {
    if (writeErr) {
        console.log('This is a write error')
    } else {
        console.log('New file created.')
    }
})

//5. Change the text inside hello.txt to upper case ("hello world" => "HELLO WORLD")
fs.readFile('./callbacks/hello.txt', (readErr, data) => {
    if (readErr) {
        console.log('This is an error')
    } else {
        const content = data.toString().toUpperCase()
        fs.writeFile('./callbacks/hello.txt', content, (writeErr) => {
            if(writeErr) {
                console.log('This is a write error.')
            } else {
                console.log('File contents succesfully modified')
            }
        })
    }
})

// fs.writeFile('./callbacks/hello.txt', 'HELLO WORLD', (writeErr) => {
//     if (writeErr) {
//         console.log('This is a write error')
//     } else {
//         console.log('File contents successfully changed.')
//     }
// })