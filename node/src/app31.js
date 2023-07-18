

const express = require('express')
// const bodyParser = require('body-parser')  // now obsolete

const app = express()
 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
 
app.get('/', (req, res) => {
  res.send({status: "server is up"})
})
 
app.post('/', (req, res) => {
    
    // res.send("DataReceived:"+ JSON.stringify(data));
    res.send({DataReceived: data});
})

app.listen(3000, () => {
  console.log('Express listening on port 3000')
})
