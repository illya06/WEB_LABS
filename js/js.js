
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

function doSomething() {
    document.getElementById("noSharing").value = "I`m going to share this text";
}

function buildChart() {
    let dataSet = countFigures();

    var ctx = document.getElementById("coolChart").getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['King', 'Queen', 'Tura', 'Horse', 'Slon', 'Pawn'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
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

    data.forEach((val, key) => {
        ammount.push(val);
    })

    return ammount;
}
