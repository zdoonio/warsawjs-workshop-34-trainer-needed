(function (root) {

    function main() {
        console.log('hello world');

        const url = 'ws://localhost:3000';
        const socket = new WebSocket(url);

        socket.addEventListener('open', () => {
            console.log('open');
        });
        socket.addEventListener('message', () => {
            console.log('message');
        });
        socket.addEventListener('close', () => {
            console.log('close');
        });
        socket.addEventListener('error', () => {
            console.log('error');
        });

    }

    root.addEventListener('DOMContentLoaded', main);

}(window));
