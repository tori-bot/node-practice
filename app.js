const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.write('hello world!');
        res.end();
    }
    if (req.url === '/api/courses')
    {
        res.write(JSON.stringify([1, 2, 3]));
        res.end()
    }
});



server.listen(3000);
console.log('listening on port 3000...');

// //load a module
 
// const EventEmitter = require('events');


// const Logger = require('./logger');
// const logger = new Logger();

// // register a listener
// logger.on('messageLogged', function (arg) {
//     console.log('Listener Called',arg);
// });


// logger.log('message');

// to raise an event,make noise

// //PATH module
// const path = require('path');

// //parse method
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// //OS module
// const os = require('os')
// var totalmemory = os.totalmem();
// var freememory = os.freemem();

// console.log(`total memory: ${totalmemory}`);
// console.log(`Freememory: ${freememory}`);

// //FILE SYSTEM module
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);
 
// //always use async methods...like this
// fs.readdir('./', function (err, files) {
//     if (err) console.log('error', err);
//     else console.log('result', files);
// })

// //global objects
// console.log();
// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// //they are called like...
// global.setInterval();


