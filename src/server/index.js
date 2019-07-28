const ws = require('ws');
const dotenv = require('dotenv');
const process = require('process');
const path = require('path');
const { verifyClient } = require('./services/verify-client');
dotenv.config({
    path: path.join(__dirname, 'config', 'app.env')
});

const port = Number(process.env.PORT);
const settings = { port, verifyClient };
const server = new ws.Server(settings);
require('./handlers/server.handler')(server);

