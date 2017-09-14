var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');

  // socket.emit('createMessage', {
  //   from: 'Hoang Ha',
  //   text: 'Yup, I love you too'
  // });
});

socket.on('newMessage', (message) => {
  console.log('newMessage', message);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
