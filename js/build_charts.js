function buildChart() {
    let dataSet = countFigures();
    var ctx = document.getElementById("coolChart").getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['King', 'Queen', 'Tura', 'Horse', 'Slon', 'Pawn'],
            datasets: [{
                label: 'Ammount of chess figures',
                backgroundColor: ["rgb(148, 0, 211)", "rgb(0, 0, 255)", "rgb(0, 255, 0)", "rgb(255, 255, 0)", "rgb(255, 127, 0)", "rgb(255, 0, 0)"], 
                data: dataSet
            }]
        }
    });
}