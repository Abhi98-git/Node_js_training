const fetch = require('node-fetch') ; 

  async function f2() {

     let response = await fetch("https://api.randomuser.me/?nat=US&results=10")
     let  response2 = await  response.json()
     console.log(response2)

  }
    
    f2()
    