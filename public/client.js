var socket = io();
function createConnection() {
	$('.sendButton').on('click', function() {
		socket.emit('userMsg', 'hello bot');	
	});
}

window.onload = function() {
	createConnection();
}