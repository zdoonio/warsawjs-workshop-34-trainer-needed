const ws = require('ws');

const process = require('process');
const { verifyClient } = require('../services/verify-client');
const port = Number(process.env.PORT);
const settings = { port, verifyClient };
const server = new ws.Server(settings);
module.exports = () => {
    require('../handlers/server.handler')(server);
};
