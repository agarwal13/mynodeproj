const express = require('express');
const http = require('http');
//const config = require('./config/env.js');
//import environment from './config/env.js';
//const config = require(process.argv[2]).get('production');
const config = require('./config/'+process.env.NODE_ENV+'.json');
console.log("Environment is " + config.env);
//console.log("Auth IP Address is " + process.env.AUTH_SERVICE);

//console.log(environment.get('development'));

var app = express();
var metadata = {
    "author": "Narendra",
    "language": "node"
}

console.log(process.env.NODE_ENV);
app.set('meta', metadata);
const server = http.createServer(app);

server.listen(config.port, function() {
    console.log(`Node is running at localhost:${config.port}`);
    console.log(app.get('meta').author);
});
