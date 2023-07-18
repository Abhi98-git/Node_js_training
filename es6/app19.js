const { error } = require("console");

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { 
        myResolve({msg: "msg received"})
        myReject({msg: "error received"}); }, 1000);
  });
  
  myPromise.then(function(value) {
     console.log(value); 
  }).catch(error=>console.log(error));
