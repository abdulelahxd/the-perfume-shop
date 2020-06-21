'use strict';

function randomNumber(min, max){
    return Math.floor(Math.random()* (max - min + 1 )) + min;
}


function Perfume(name, quantity, price){
    this.name = name,
    this.quantity = quantity,
    this.price = price,
    perfumes.push(this);
}

var perfumes = [];


var form = document.querySelector('#formId');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    var perfumeName = event.target[0].value;
    var perfumeQu = event.target[1].value;
    var randomPrice = randomNumber(120, 270) * perfumeQu;
    var createPerfume = new Perfume(perfumeName, perfumeQu, randomPrice);
    sendToLocal();
    clean();
    render();
})

var table = document.querySelector('#tableId');
function render(){
    for (let i = 0; i < perfumes.length; i++) {
    var trEl = document.createElement('tr');
    table.appendChild(trEl);

    var tdEl = document.createElement('td');
    tdEl.textContent = perfumes[i].name;
    trEl.appendChild(tdEl);
    
    var tdEl2 = document.createElement('td');
    tdEl2.textContent = perfumes[i].quantity;
    trEl.appendChild(tdEl2);

    var tdEl3 = document.createElement('td');
    tdEl3.textContent = perfumes[i].price + '$';
    trEl.appendChild(tdEl3);

    // var tdEl4 = document.createElement('td');
    var buttonD = document.createElement('button');
    buttonD.textContent = 'X'
    buttonD.id = i;
    trEl.appendChild(buttonD);
    // table.appendChild(tdEl4);
    }
}


function clean(){
    table.innerHTML = `<tr>
    <th>perfume</th>
    <th>quanitiy</th>
    <th>price</th>
    <th>remove</th>
</tr>`
}

table.addEventListener('click', (event)=>{
    var deleteM;
    if(event.target.textContent === 'X'){
        deleteM = event.target.id;
        perfumes.splice(deleteM, 1);
        clean();
        render();
        sendToLocal();
    }
})




function sendToLocal(){
    var sendingJSON = JSON.stringify(perfumes);
    localStorage.setItem('key', sendingJSON);
}

function getFromLocal(){
    var gettingJSON = localStorage.getItem('key');
    if(gettingJSON){
        perfumes = JSON.parse(gettingJSON);
    }
}
getFromLocal();
render();