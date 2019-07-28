(function (root) {
    let socket = null;

    function sendMessage(data) {
        console.log('sendMessage', data);
        const payload = JSON.stringify(data);
        socket.send(payload);
    }

    function reconnect() {
        const time = 5678; // ms
        setTimeout(() => {
            console.log('reconnect', time);
            setupServer();
        }, time)
    }

    function setupServer() {
        socket = new WebSocket(root.app.config.url);

        socket.addEventListener('open', () => {
            console.log('open');

        });
        socket.addEventListener('message', (evt) => {
            try {
                const payload = evt.data;
                const data = JSON.parse(payload);
                console.log('message', data);
                switch (data.action) {
                    case 'alarm':
                        document.dispatchEvent(new CustomEvent('alarm'));
                        break;
                    default:

                }
            } catch (err) {
                console.log(err);
            }
        });
        socket.addEventListener('close', () => {
            console.log('close');
            reconnect();
        });
        socket.addEventListener('error', () => {
            console.log('error');
            reconnect();
        });
    }

    Object.assign(root.app, {sendMessage, setupServer})
}(window));
