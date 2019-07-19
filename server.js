const express = require('express');

const SchemeRouter = require('./schemes/action-router');

const server = express();

server.use(express.json());
server.use('/api/', SchemeRouter);

module.exports = server;