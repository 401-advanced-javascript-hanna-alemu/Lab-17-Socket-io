'use strict';

//Hanna - File Reading/Writing/Uppercasing functions
//fire file-error and file-save events to the server
const socketIO = require('socket.io-client');
require('../logger/logger');

const util = require('util');
const fs = require('fs');

const API_URL = 'http://localhost:3000';

const generalConnection = socketIO.connect(API_URL);
const fileConnection = socketIO.connect(`${API_URL}/file`);

/**
 * This readFile function is a promise that reads the file
 * @param {object} file
 */

//Hanna ----------- util.promisfy changes a callback to a promise

const readFile = util.promisify(fs.readFile);

/**
 * This writeFile function updates the fule contents with the modified content
 */
const writeFile = util.promisify(fs.writeFile);

/**
 * This function takes in the file's inner contents, changes them to strings and uppercases them
 * @param {object} fileContents 
 */
const uppercaser = (fileContents) => {
    //console.log(fileContents.toString());
  let stringifiedContent = fileContents.toString().toUpperCase();
  //console.log('here', stringifiedContent);
  return Buffer.from(stringifiedContent);
};

/**
 * This function takes in the stringified content and overwrites it
 * @param {object} file 
 */
const alterFile = (file) => {
  let stringifiedContent = null;  

  readFile(file)
    .then(fileContents => {
      fileConnection.emit('readFile', file);
      stringifiedContent = uppercaser(fileContents);
      return writeFile(file, stringifiedContent)
        .then (() => {
          fileConnection.emit('writeFile', file);
          fileConnection.emit('save', file);
        });
    })
    .catch(err => console.log(err));
};

let file = process.argv.slice(2).shift();
alterFile(file);
