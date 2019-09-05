'use strict';

//Hanna - this file will setup lisners for file saving and error
//Hanna - When they occur, emit() the appropriate event and payload to clients so logger can pick it up

const socketIOServer = require('socket.io')(3000);


socketIOServer.on('connection', socket => {
  console.log('Connected!', socket.id);
  socket.on('file', file => {
    console.log('Processing file...');
    socket.broadcast.emit('log', file);
  });
});

const fileNameSpace = socketIOServer.of('/file');

fileNameSpace.on('connection', () => {
  console.log('Hey Hanna, someone has connected to the file nameSpace');
  fileNameSpace.emit('readfile', 'here is a payload');
});

console.log('Hey hanna, server is up on 3000');
