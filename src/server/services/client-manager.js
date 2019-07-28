const debug = require('debug');

const console = {
    log: debug('client-manager:log')
};

const clients = [];

function registerClient(client) {
    console.log('registerClient');
    clients.push(client);
}

function deleteClient(client) {
    console.log('deleteClient');
    const index = clients.indexOf(client);
    if ( index === -1) {
        return;
    }
    clients.splice(index, 1);
}

function broadcast(client, payload) {
    console.log('broadcast', payload);
    const data = JSON.stringify(payload);
    clients.forEach(function(thisClient) {
        if(thisClient !== client)
            thisClient.send(data);
    });
}

module.exports = {
    registerClient,
    deleteClient,
    broadcast
};
