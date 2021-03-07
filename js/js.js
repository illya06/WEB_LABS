
function main() {
    doSomething();
    buildChart();
}

let data = new Map([
    ['king', 0],
    ['queen', 0],
    ['tura', 0],
    ['horse', 0],
    ['slon', 0],
    ['pawn', 0]
]);

//form related stuff
function doSomething() {
    document.getElementById("noSharing").value = "I`m going to share this text";
}

function buildChart() {

    let dataSet = countFigures();
    var ctx = document.getElementById("coolChart").getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['King', 'Queen', 'Tura', 'Horse', 'Slon', 'Pawn'],
            datasets: [{
                label: 'My First dataset',
                borderColor: 'rgb(0, 0, 0)',
                data: dataSet
            }]
        }
    });
}

function countFigures() {
    let ammount = [];
    let figures = document.getElementsByTagName('img');

    Array.from(figures).forEach(element => {
        data.set(element.alt, data.get(element.alt) + 1);
    });

    data.forEach(val => {
        ammount.push(val);
    })

    return ammount;
}
