const  http = require('http');

const fs = require('fs');

let  server = http.createServer(function(request, response) {
    const readableStream = fs.createReadStream('./index.html');
    let data = '';
    
    readableStream.setEncoding('utf8');
     
    readableStream.on('data', function(block) {
        // data+=block;
        response.write(block);
    });
     
    readableStream.on('end', function() {
        console.log(">> File IO ended.") ;
        console.log(data);
        
    response.end();
    });
    
    
});
server.listen(3000);
console.log("Welcome!!!")