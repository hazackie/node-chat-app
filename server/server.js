const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

// setup server
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
//
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newMessage', {
  //   from: 'Mike',
  //   text: 'I just came to my house.'
  // });

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to chat app'
  });

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined'
  })

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    // io.emit('newMessage', {
    //   from: message.from,
    //   text: message.text
    // });

    socket.broadcast.emit('newMessage', {
      from: message.from,
      text: message.text
    });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

// start app
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
