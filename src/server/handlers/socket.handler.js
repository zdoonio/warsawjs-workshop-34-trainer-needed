const { registerClient, deleteClient } = require('../services/client-manager');

module.exports = (socket) => {
    // const payload = { obiad: '13:15'};
    // socket.send(JSON.stringify(payload));
    registerClient(socket);

    socket.on('open', () => {
        console.log('open');
    });
    socket.on('close', () => {
        console.log('close');
        deleteClient(socket);
    });
    socket.on('message', (payload) => {
        try {
            const data = JSON.parse(payload);
            console.log('message', data);
        } catch (err) {
            console.log(err);
        }

    });
    socket.on('error', () => {
        console.log('error');
        deleteClient(socket);
    });

};
