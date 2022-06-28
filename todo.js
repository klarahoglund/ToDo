const btnBorn = document.querySelector('#btnBorn');
var listName;
let submit = document.querySelector('#submit');
let title = document.querySelector('#title');
const lista = document.querySelector('#lista');
//var lis = document.getElementsByTagName("li");

var myList = [];

btnBorn.addEventListener('click', test);
submit.addEventListener('click', addItem);


function test(e) {
    e.preventDefault();
    var listName = document.querySelector('#listName').value;

    contrast('#nameZone', '#listZone');
    title.innerHTML = listName;

}

function addItem(e) {
    e.preventDefault();
    var inputItem = document.querySelector('#inputItem').value;
    newElement(inputItem);


}
function newElement(inputItem) {
    let newdiv = document.createElement("div");
    let newli = document.createElement("li");
    let textItem = document.createTextNode(inputItem);
    let trash = document.createElement("button");

    trash.className = "trash";
    trash.classList.add("btn", "float-end");

    // trash.classList.add("float-end");

    newli.appendChild(textItem);
    newli.appendChild(trash);
    lista.prepend(newli);

    newli.addEventListener('click', done);
    trash.addEventListener('click', gone);

}
function gone() {


}
function done(e) {
    e.target.classList.toggle('done');
    lista.appendChild(e.target);

}
function remover(x) {
    document.querySelector(x).remove();


}


function show(y) {
    document.querySelector(y).style.visibility = "visible";
}
function hide(y) {
    document.querySelector(y).style.visibility = "hidden";
}


function contrast(x, y) {
    remover(x);
    show(y);


}




/**
 * 
 * const addBtn = document.querySelector('#addBtn');
const addedBtn = document.querySelector('#addedBtn');
const toListBtn = document.querySelector('#toListBtn');
function openToAdd(e) {
    e.preventDefault();
    show('#addZone');
}
function addToList(e) {
    e.preventDefault();
    let addedItem = document.querySelector('#addedItem').value;
    myList.push(addedItem);
}
function openList(e) {
    e.preventDefault();
    hide('#addZone');
    show('#listZone')

}
 */