function doom() {
    let timer = createTimer();
    document.getElementById('doomsDay').appendChild(timer);
    document.getElementById('start').disabled = true;
}

function createTimer() {
    let time = document.createElement('input');
    time.setAttribute('type', 'range');
    time.setAttribute('max', '100');
    time.setAttribute('min', '0');
    time.setAttribute('step', '2');
    time.setAttribute('value', '0');
    return time;
}