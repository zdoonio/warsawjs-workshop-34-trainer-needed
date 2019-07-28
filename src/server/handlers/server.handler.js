const setupSocketHandler = require('./socket.handler');

module.exports = (server) => {
    server.on('headers', () => {
        console.log('headers');
    });

    server.on('connection', (socket, _request) => {
        console.log('connection', socket);
        setupSocketHandler(socket);
    });

    server.on('listening', () => {
        console.log('listening');
    });

    server.on('error', () => {
        console.log('error');
    });
};
