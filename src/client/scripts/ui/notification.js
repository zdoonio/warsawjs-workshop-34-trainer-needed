function setupUI() {
    console.log('notification: setupUI');
}

function alarm(data) {
    const $p = document.querySelector('p');
    if(data.action === 'alarm')
    {
        $p.className = 'message';
    }
}
