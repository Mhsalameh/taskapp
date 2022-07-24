'use strict';
const server = require('./src/server.js');
require('dotenv').config();

server.client.connect().then(() => {
    server.start(process.env.PORT || 3001);
});
