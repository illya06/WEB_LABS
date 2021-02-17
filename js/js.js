

function add() {
    let element = document.getElementById('add');
    let addedItem = document.createElement('span');
    addedItem.innerText = 'ADDED SOME TEXT';
    element.append(addedItem);
}

function remove(){
    let element = document.querySelector('#add > span');
    element.remove();
}

function insert(){
    let element = document.getElementById('add');
    let newItem = document.createElement('span');
    newItem.innerText = 'ADDED SOME OTHER TEXT';
    element.after(newItem);
}