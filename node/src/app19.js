const  http = require('http');

let  server = http.createServer(function(request, response) {
    response.write("<html> <head> <title>Dyn Page</title> </head> <body>Using <em>HTTP!</em></body> </html>");
    response.end();
});
server.listen(3000);
console.log("Welcome!!!")