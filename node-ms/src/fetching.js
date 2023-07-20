const fetch = require('node-fetch');  // npm install node-fetch@2



const  fetching = (req, res, next) => {
   // const url = "https://jsonplaceholder.typicode.com/users";

   fetch("https://api.randomuser.me/?nat=US&results=10")
    .then(response => response.json())
    .then(members => res.send(members))
    .catch(err => res.send(err))

}

module.exports = fetching;