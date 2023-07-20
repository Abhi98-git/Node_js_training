const restify = require('restify');
const stateData = require('./data/state-details') ;
const logger = require('morgan') ;
const mylogger = require('./src/mylogger') ;
const sendInformation = require('./src/sending') ;
const fetching = require('./src/fetching') ;


const server = restify.createServer();


server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(logger('dev')) ;
server.use(mylogger) ;



server.get('/', (req, res, next) => res.send({status: "server is up"}));
server.get('/showall', (req, res, next) =>  res.send(stateData));
server.get('/users', fetching) ;
server.get('/state/:stateName', sendInformation);  // e.g. kerAla / rajasthaN

server.listen(3000, function () {
	console.log("Restify listening on port 3000");
});
