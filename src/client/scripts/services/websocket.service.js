(function (root) {
    let socket = null;

    function sendMessage(data) {
        const payload = JSON.stringify(data);
        socket.send(payload);
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
        });
        socket.addEventListener('error', () => {
            console.log('error');
        });
    }

    Object.assign(root.app, {sendMessage, setupServer})
}(window));
