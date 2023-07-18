

const express = require("express");
const http = require("http");
const app = express();

function logger(req,res,next){
    console.log("Req info:: %s %s",req.method,req.url) ;
    next();
}

app.use(logger)


app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
  console.log("homepage...") ;
 
});

app.get("/user/:who", function(req, res) {
  res.end("User " + req.params.who + ": welcome back to the system.");
  console.log("/user/:who");
  console.log(req.route);
  console.log("\n  field: ", res.get('Content-Type')); 
});

app.get("/about", function(request, response) {
  response.end("<h3>Welcome to the about page! </h3>");
   console.log("/about...") ;
});
app.post("/about", function(request, response) {
    response.end("<h3>Welcome to the about post page! </h3>");
     console.log("/about...") ;
  });
  
  
  app.get("*", function(request, response) {
    response.end("<h4>404! File Missing</h4>");
    console.log("404") ;
  });


http.createServer(app).listen(3000);
console.log("listening  on 3000...") ;