'use strict';

//Hanna - this file will Listen for file-save and file-error events
//console.log() both error and save messages

const socketIO = require('socket.io-client');

const API_URL = 'http://localhost:3000';

const fileConnection = socketIO.connect(`${API_URL}/file`);

fileConnection.on('readfile', payload => {
    console.log('file reader', payload);
});
