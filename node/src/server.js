const express = require('express')
const download_file_curl = require('./app34.js')
const myfile_url = "https://api.balarammullick.com/ProdImage/3d0eace9-dac7-4120-902e-68f515b2813a.jpg";  
const url = 'https://jsonplaceholder.typicode.com/posts';
const fetch = require('node-fetch') ; 


const app = express()
 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html')
})

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username === 'admin' && password === 'admin') {
        res.send('Login successful');
    }
    else {
        res.send('Login failed');
    }
})
app.get('/download', (req, res) => {
    download_file_curl(myfile_url);
    res.send({Status: "file downloaded"})
  })  
 
app.get('/post', (req, res) => {
    // json_data = express.get(url)
    json_data = fetch(url)
    json_data.then(response => response.json())
  .then(data => {res.send(data)})
  .catch(err => console.error(err))
 
    console.log(json_data)
})  

app.listen(3000, () => {
  console.log('express listening on port 3000')})