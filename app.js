'use strict';

imageArray = [
    'Alstroemerias',
    'Gardenias',
    'Orchids',
    'Roses',
    'Sunflowers',
    'Tulips',
    'Peonies'
]

let form = document.getElementById('form');
let table = document.getElementById('table');

function Flowers(name, img, season) {

    this.name = name;
    this.img = imageArray;
    this.season = season;

    Flowers.all.push(this);

}

function getImage (img) {
    
    let img = document.getElementById(img);

    for(let i = 0; i < imageArray.length; i++)
    {
        if(imageArray[i].src == img.src) 
        {
            if(i === imageArray.length){
                document.getElementById(img).src = imageArray[0].src;
                break;
            }
            document.getElementById(img).src = imageArray[i].src;
            break;
        }
    }
}

Flowers.prototype.render = function () {

    let tr = document.createElement('tr');
    table.appendChild(tr);

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = this.name;

    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = this.img;

    let td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = this.season;

}

form.addEventListener('submit', function (event) {

    event.preventDefault();

    let name = event.target.name.value;
    let img = event.target.img.value;

    for (i = 0; i < imageArray.length; i++) {
        let newImg = imageArray[i];
        newImg.addEventListener();
    }

    let season = event.target.img.value;

    newFlowers = new (name, img, season);

    Flowers.all.render();
    addData();

});

function addData() {

    localStorage.setItem('Flowers', JSON.stringify(Flowers.all));
}

function getData() {

    let data = localStorage.getItem('Flowers');

    for (let i = 0; i < data.length; i++) {
        JSON.parse(localStorage.getItem('Flowers'));

    }
}

getData();





