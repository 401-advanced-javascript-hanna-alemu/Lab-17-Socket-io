# Lab-17-Socket-io

### Author: Hanna Alemu

### Common npm Scripts
 "lint": "eslint \"**/*.js\"",  
   "start": "node index.js",  
   "test": "jest --verbose --coverage",  
   "test-watch": "jest --watchAll --verbose --coverage",  
   "jsdoc": "jsdoc -c ./docs/config/jsdoc.config.json",  

### Links and Resources
* [submission PR]()
* [heroku](https://lab-17-socket-io.herokuapp.com/)
#### Documentation
* Jsdoc included inline

### Modules

 * app.js(contains the functionality of reading and writing to a file)
 * logger.js( logs out the events emitted from the other files)
 * socket-IO-server.js(starts up the socket server and defines the routes)

### Setup
* Install dependencies, add file that you wish to modify in the root, replace the file path in the following command

#### Running the app

* To check if socket server is running open another terminal window and run the following command
#### Run $ node socket-IO-server/socket-server.js 

* To run the application to edit the file from the root of the terminal

### Run $ node application/app.js test.text

* To see the output logs of the file 

### Run $ node logger/logger.js
*