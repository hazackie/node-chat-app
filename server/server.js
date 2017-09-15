const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const{generateMessage, generateLocationMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

// setup server
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
//
app.use(express.static(publicPath));
``
io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newMessage', {
  //   from: 'Mike',
  //   text: 'I just came to my house.'
  // });

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to Cht App'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text
    // });
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

// start app
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
