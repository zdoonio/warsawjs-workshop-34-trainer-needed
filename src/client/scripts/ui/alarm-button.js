function setupUI() {
    console.log('alarm-button: setupUI');
    const $button = document.querySelector('button');
    $button.addEventListener('click', () =>{
        sendMessage({action: 'alarm'});
    });
}
