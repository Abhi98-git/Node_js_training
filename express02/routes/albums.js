var express = require('express');
var router = express.Router();
const url = 'https://jsonplaceholder.typicode.com/albums';
const fetch = require('node-fetch') ; 

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
  json_data = fetch(url)
    json_data.then(response => response.json())
  .then(data => {res.send(data)})
});

module.exports = router;
