var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/welcomePage.html');
});

app.use(express.static('public'));

io.on('connection', function(socket) {
	console.log('a new user connected');
	
	socket.on('userMsg', function(msg) {
		console.log('user says: ', msg);
	});
	
	socket.on('disconnect', function() {
		console.log('A user is disconnected');
	});
});

http.listen(3000, function() {console.log('listening on:- 3000')});

