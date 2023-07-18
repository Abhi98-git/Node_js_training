const spawn = require('child_process').spawn;
var express = require('express');
var router = express.Router();
const url = 'https://jsonplaceholder.typicode.com/albums';

router.get('/', function (req, res, next) {
    jsondata = ''
    const curl = spawn('curl', [url]);
    curl.stdout.on('data', function (data) {
        jsondata = jsondata + data;
    });
    curl.stdout.on('end', function (data) {
        res.send(JSON.parse(jsondata))
    });

});

module.exports = router;
