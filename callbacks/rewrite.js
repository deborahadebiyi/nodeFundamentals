const fs = require('fs/promises');

/*
ASYNC AWAIT
*/
(async function myfunc() {
    try {
        await fs.rename('./callbacks/bollocks.txt', './callbacks/foo.txt')
        await fs.copyFile('./callbacks/foo.txt','./callbacks/bar.txt')
        await fs.copyFile('./callbacks/foo.txt', './callbacks/baz.txt')
        await fs.writeFile('./callbacks/hello.txt', 'hello world')
        const content = await fs.readFile('./callbacks/hello.txt')
        content.toString().toUpperCase()
        await fs.writeFile('./callbacks/hello.txt', content)
        console.log('finished!')
    } catch (err) {
        console.log("ouch!", err);
    }
})()

/*
PROMISES
*/

fs.rename('./callbacks/bollocks.txt', './callbacks/foo.txt')
    .then(() => {
        return fs.copyFile('./callbacks/foo.txt','./callbacks/bar.txt')
    })
    .then(() => {
        return fs.unlink('./callbacks/bar.txt')
    })
    .then(() => {
        return fs.writeFile('./callbacks/hello.txt', 'hello world')
    })
    .then(() => {
        return fs.readFile('./callbacks/hello.txt')
    })
    .then((data) => {
        const content = data.toString().toUpperCase()
        return fs.writeFile('./callbacks/hello.txt', content)
    })
    .catch((err) => {
        console.log("This is the error file path:", err)
    })


/*
CALLBACKS
*/
//this is an example of callback hell
fs.rename('./callbacks/bollocks.txt', './callbacks/foo.txt', (renameError) => {
    if (renameError) {
        console.log('There is an error.')
    } else {
        console.log('Rename complete.')
        fs.copyFile('./callbacks/foo.txt','./callbacks/bar.txt', (copyErr) => {
            if (copyErr) {
                console.log('There is a copy error')
            } else {
                fs.copyFile('./callbacks/foo.txt', './callbacks/baz.txt', (secondCopyErr) => {
                    if (secondCopyErr) {
                        console.log('This is a second copy error')
                    } else {
                        console.log('All copies successfully created')
                        fs.unlink('./callbacks/baz.txt', (deleteErr) => {
                            if (deleteErr) {
                                console.log('This is an error.')
                            } else {
                                console.log('File successfully removed.')
                                fs.writeFile('./callbacks/hello.txt', 'hello world', (writeErr) => {
                                    if (writeErr) {
                                        console.log('This is a write error')
                                    } else {
                                        console.log('New file created.')
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
                                    }
                                })
                            }
                        })
                    }
                })
            }
        } )
    }
})

//1. Rename bollocks.txt to foo.txt
//2. Create two copies of foo.txt as bar.txt and baz.txt
//3. Delete baz.txt
//4. Create a new file named hello.txt with the content "hello world"
//5. Change the text inside hello.txt to upper case ("hello world" => "HELLO WORLD")
// fs.writeFile('./callbacks/hello.txt', 'HELLO WORLD', (writeErr) => {
//     if (writeErr) {
//         console.log('This is a write error')
//     } else {
//         console.log('File contents successfully changed.')
//     }
// })