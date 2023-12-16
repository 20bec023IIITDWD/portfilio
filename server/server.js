const express = require('express');
const app = express();
const admin = require('./routes/admin');
const repositories = require('./routes/repositories');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const http = require('http');
app.use('/admin',admin);
app.use('/repositories',repositories);

app.get('/',(req,res)=>{
res.send('landing page')
})


app.post('/',(req,res)=>{
    res.send(req.body);
})


const server = http.createServer(app);
server.listen(3000,console.log('started'));

