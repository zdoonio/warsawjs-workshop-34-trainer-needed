module.exports = (socket) => {
    socket.on('open', () => {
        console.log('open')
    });
    socket.on('close', () => {
        console.log('close')
    });
    socket.on('message', () => {
        console.log('message')
    });
    socket.on('error', () => {
        console.log('error')
    });

};
