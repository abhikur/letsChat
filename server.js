var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.listen(3333, function() {console.log('listening at 3333...')});

app.use(express.static('html'));