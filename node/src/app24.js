
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./keys/agent2-key.pem'),
  cert: fs.readFileSync('./keys/agent2-cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("HTTPS server is up\n");
}).listen(4443, () => console.log("https server on 4443"));

