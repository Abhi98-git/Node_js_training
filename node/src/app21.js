

const http = require('http');
const port = 3000;
let http_verb = "" ;

const  handle_GET_request = (response) => {
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
    http_verb = "GET";
	response.end('Get action requested.');
}

function handle_POST_request(response) {
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
    http_verb = "POST";
	response.end('Post action requested.');
}

function handle_PUT_request(response) {
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
    http_verb = "PUT";
	response.end('Put action requested.');
}

function handle_HEAD_request(response) {
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	http_verb = "HEAD";
	response.end('Head action requested.');
}

function handle_DELETE_request(response) {
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
    http_verb = "DELETE";
	response.end('Delete action requested.');
}

function handle_bad_request(response) {
	response.writeHead(400, {
		'Content-Type' : 'text/plain'
	});
	response.end('Bad request');
}


const  handle_request = (request, response) => {

	switch (request.method) {
	case 'GET':
		handle_GET_request(response);
		break;
	case 'POST':
		handle_POST_request(response);
		break;
	case 'PUT':
		handle_PUT_request(response);
		break;
	case 'DELETE':
		handle_DELETE_request(response);
		break;
	case 'HEAD':
		handle_HEAD_request(response);
		break;
	default:
		handle_bad_request(response);
		break;
	}

	console.log('Request processing done: ', http_verb);
}

http.createServer(handle_request)
    .listen(port, '127.0.0.1', () => console.log('Http server at port:' + port));


