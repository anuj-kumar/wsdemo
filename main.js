var io = require('socket.io')(9000);

io.on('connection', function (socket) {
  socket.on('click event', function (data) {
  	console.log(data);
  		socket.broadcast.emit('news', data);
    });
});