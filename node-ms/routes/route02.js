const fetch = require('node-fetch') ;  // npm install node-fetch@2.6.1

const data02 = {"name": "ajay", "age": 25}
const url = 'https://jsonplaceholder.typicode.com/users' ;


const  route02 = (server) => {
    server.get('/r02', (_req, res, next) => {

      // res.send({data02});
      


      fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
            return next();
        })
        .catch(err => console.log(err.message))

    });
  }

  module.exports = route02 ;