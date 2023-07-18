const fetch = require('node-fetch') ;  // npm install node-fetch@2

async function myfetch(){
    const url = 'https://api.github.com/users/wycats' ;

    const response = await fetch(url);
    const data = await response.json();
    console.log("data:", data);
}

myfetch();
