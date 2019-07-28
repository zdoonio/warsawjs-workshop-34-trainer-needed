(function (root) {
    let socket = null;

    function sendMessage(data) {
        const payload = JSON.stringify(data);
        socket.send(payload);
    }

    function main() {
        console.log('hello world');

        const url = 'ws://localhost:3000';
        socket = new WebSocket(url);

        socket.addEventListener('open', () => {
            console.log('open');

        });
        socket.addEventListener('message', (evt) => {
            try {
                const payload = evt.data;
                const data = JSON.parse(payload);
                console.log('message', data);
                alarm(data);
            } catch (err) {
                console.log(err);
            }
        });
        socket.addEventListener('close', () => {
            console.log('close');
        });
        socket.addEventListener('error', () => {
            console.log('error');
        });

        setupUI();
    }

    root.addEventListener('DOMContentLoaded', main);
    root.sendMessage = sendMessage;

}(window));
