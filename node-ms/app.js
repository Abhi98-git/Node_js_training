const restify = require('restify'); 

const route01 = require('./routes/route01');
const  route02 = require('./routes/route02');
// const  route03 = require('./routes/route03');

const port = 3000 ;

const server = restify.createServer({ name: 'api' });

route01(server);
route02(server);
// route03(server);

server.listen(port, () => console.log("Restify server on: ", port ));


