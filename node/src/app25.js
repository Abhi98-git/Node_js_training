const fs = require('fs');

let content = 'Some content!';
linecount =0 
data = ''
while(linecount<200000)
{ 
    data  = data + '\n' +''+linecount+''+content
    linecount++
    
}
    fs.writeFile('./test.txt', data, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
    });