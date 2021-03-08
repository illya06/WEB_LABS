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