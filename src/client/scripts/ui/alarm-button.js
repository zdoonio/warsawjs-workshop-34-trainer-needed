(function (root) {
    function setupUI() {
        console.log('alarm-button: setupUI');

        const $button = document.querySelector('button');
        $button.addEventListener('click', () =>{
            root.app.sendMessage({action: 'alarm'});
        });
    }

    Object.assign(root.app, { setupUI });
})(window);
