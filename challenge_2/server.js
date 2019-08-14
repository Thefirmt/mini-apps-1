const express = require('express');
const app = express();
const port = 3000;
const js = require('./client/app.js')

app.use(express.static(__dirname + 'client'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client' + '/index.html')
})

app.post('/', (req, res) =>{
    var data = JSON.stringify(req.body.data);
    var parsie = JSON.parse(data);
    res.sendFile(__dirname + '/client' + '/index.html')
})


app.listen(port, () => {console.log(`Server is running on port ${port}!`)});