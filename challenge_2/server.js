const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + 'client'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client' + '/index.html')
})

app.post('/', (req, res) =>{
    console.log(JSON.stringify(req.body.data));
    res.sendFile(__dirname + '/client' + '/index.html')
})

app.listen(port, () => {console.log(`Server is running on port ${port}!`)});