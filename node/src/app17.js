
const fs = require('fs');
console.log("starting server... port 3000");

require('http').createServer(function(req, res) {

  
  res.writeHead(200, {'Content-Type': 'audio/mp3'});

  var rs = fs.createReadStream('./sample_music.mp3');
  console.log("streaming the data...");
  rs.pipe(res);

}).listen(3000);
