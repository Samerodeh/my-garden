'user strict';

let allFlowers =[];

let tableElement = document.getElementById('table');



function Flower (name,img,season){
  this.name = name;
  this.img =`./img/${img}.jpeg`;
  this.season = season;
    
  allFlowers.push(this);

}

let formElement = document.getElementById('form');
formElement.addEventListener('submit',addNewFlower);

function addNewFlower (event){
  event.preventDefault();
  let name = event.target.name.value;
  let img = event.target.img.value;
  let season = event.target.season.value;
    
  console.log(name,img,season);
    
  new Flower(name,img,season);
    
  saveInLocal();
  renderTable();
    
}


function renderTable(){
  tableElement.innerHTML='';

  let headRow = document.createElement('tr');
  tableElement.appendChild(headRow);

  let th1 = document.createElement('th');
  headRow.appendChild(th1);
  th1.innerHTML = '# img';

  let th2 = document.createElement('th');
  headRow.appendChild(th2);
  th2.innerHTML = 'name';

  let th3 = document.createElement('th');
  headRow.appendChild(th3);
  th3.innerHTML = 'season';

  for (let i = 0; i < allFlowers.length; i++) {
    let rowElement = document.createElement('tr');
    tableElement.appendChild(rowElement);

    let td1 = document.createElement('td');
    rowElement.appendChild(td1);
    td1.innerHTML = `<span onclick="deletRow(${i})">X</span> <img src="${allFlowers[i].img}" >`;

    let td2 = document.createElement('td');
    rowElement.appendChild(td2);
    td2.innerHTML = allFlowers[i].name;

    let td3 = document.createElement('td');
    rowElement.appendChild(td3);
    td3.innerHTML = allFlowers[i].season;

  }
}

getFromLocal();
renderTable();

function saveInLocal(){
  let data = JSON.stringify(allFlowers);
  localStorage.setItem('Flowers',data);
}

function getFromLocal(){
  let data = localStorage.getItem('Flowers');
  if (data) {
    allFlowers = JSON.parse(data);
  }
}

function deletRow(num){
  allFlowers.splice(num,1);
  saveInLocal();
  renderTable();
}

function clearTable(){
  tableElement.innerHTML='';
  allFlowers = [];
  saveInLocal();
  renderTable();
}
