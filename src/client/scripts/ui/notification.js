(function (root) {
    function setupUI() {
        console.log('notification: setupUI');

        document.addEventListener('alarm', () => {
            const $message = document.querySelector('p');
            $message.classList.remove('hidden');
        });
    }
    Object.assign(root.app, { setupUI });
})(window);
