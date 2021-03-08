let data = new Map([
    ['king', 0],
    ['queen', 0],
    ['tura', 0],
    ['horse', 0],
    ['slon', 0],
    ['pawn', 0]
]);

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
