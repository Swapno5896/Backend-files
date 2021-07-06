const fs = require('fs');

fs.readFile('./files/text.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile('./files/text', res, 'utf-8', (err) => {
            console.log(err)
        })
    }
});
