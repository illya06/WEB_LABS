function doom() {
    let figures = document.getElementsByTagName('img');
    let timer = createTimer();
    document.getElementById('doomsDay').appendChild(timer);
    document.getElementById('start').disabled = true;
    let intID = setInterval(() => makeDoom([intID, figures]), 1000);
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

function makeDoom([intervalTimeout, imgsToDelete]) {
    let timerObj = document.querySelector('#doomsDay > input');
    let happyNumber = Math.floor((Math.random() * imgsToDelete.length) + 1);

    timerObj.value = 5 + Number(timerObj.value);

    //figures exeqution
    imgsToDelete[happyNumber].parentNode.removeChild(imgsToDelete[happyNumber]);

    if (timerObj.value == timerObj.max) {
        //reveal the pain
        buildChart();
        clearInterval(intervalTimeout);
    }
}