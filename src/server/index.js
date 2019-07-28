const ws = require('ws');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
    path: path.join(__dirname, 'config', 'app.env')
});

const port = Number(process.env.PORT);

const settings = { port };
const server = new ws.Server(settings);

server.on('headers', () => {
   console.log('headers');
});

server.on('connection', () => {
    console.log('connection');
});

server.on('listening', () => {
    console.log('listening');
});

server.on('error', () => {
    console.log('error');
});
