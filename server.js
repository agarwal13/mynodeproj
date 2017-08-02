const express = require('express');
const http = require('http');
//const config = require('./config/config.json');
import environment from './config/env.js';
const config = require(process.argv[2]).get('production');
console.log(config.env);

console.log(environment.get('development'));

var app = express();
app.set('port', 4444);
var metadata = {
    "author": "Narendra",
    "language": "node"
}

console.log(process.env.NODE_ENV);
app.set('meta', metadata);
const server = http.createServer(app);

server.listen(app.get('port'), function() {
    console.log(`Node is running at localhost:${app.get('port')}`);
    console.log(app.get('meta').author);
});