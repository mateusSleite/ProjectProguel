const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const SocketHandler = require('./path/to/SocketHandler');

const app = express();
const server = http.createServer(app);

SocketHandler.configureSocket(server);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
