const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const readStream = fs.createReadStream(__dirname + '/test.txt');

  readStream
    .on('data', (chunk) => {
      const canReadNext = res.write(chunk);
      if (!canReadNext) {
        readStream.pause();
        res.once('drain', () => readStream.resume())
      }
    })
    .on('end', () => res.end())
    .on('error', (e) => res.destroy());
});

server.listen(3000, () => console.log("Streamimg Server with backpressure, on 3000"));