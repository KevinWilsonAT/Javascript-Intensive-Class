const imgView = document.getElementById('img-view');
const titleProd = document.getElementById('title-product');
const colorName = document.getElementById('selected-color-name');
const miniImg0 = document.getElementById('0-mini-img');
const miniImg1 = document.getElementById('1-mini-img');
const miniImg2 = document.getElementById('2-mini-img');

const cypressGreen = {
    name: 'Verde Cipestre',
    folder: 'img-cypress-green'
}

const winterBlue = {
    name: 'Azul Inverno',
    folder: 'img-winter-blue'
}

const midnight = {
    name: 'Meia Noite',
    folder: 'img-midnight'
}

const stellar = {
    name: 'Estelar',
    folder: 'img-stellar'
}

const lightPink = {
    name: 'Rosa Claro',
    folder: 'img-light-pink'
}

const colorOptions = [cypressGreen, winterBlue, midnight, stellar, lightPink];
const sizeOptions = ['41 mm','45 mm'];

let selectedImg = 1;
let selectedSize = 1;
let selectedColor = 1;

function changeImage(){

    const idSelectedOption = document.querySelector('[name="img-option"]:checked').id;
    selectedImg = idSelectedOption.charAt(0);
    imgView.src = './src/img/color-options/'+ colorOptions[selectedColor].folder + '/image-' + selectedImg+'.jpeg';
}

function changeSize(){
    const idSelectedOption = document.querySelector('[name="size-option"]:checked').id;

    selectedSize = idSelectedOption.charAt(0);
    titleProd.innerText = "Pulseira loop esportiva "+colorOptions[selectedColor].name+" para caixa de "+sizeOptions[selectedSize];

    if (sizeOptions[selectedSize] === '41 mm'){
        imgView.classList.add('small-box');
    }
    else{
        imgView.classList.remove('small-box');
    }
}

function changeColor(){

    const idSelectedOption = document.querySelector('[name="color-option"]:checked').id;
    selectedColor = idSelectedOption.charAt(0);
    titleProd.innerText = "Pulseira loop esportiva "+colorOptions[selectedColor].name+" para caixa de "+sizeOptions[selectedSize];

    colorName.innerText = 'Cor - ' + colorOptions[selectedColor].name

    miniImg0.src = './src/img/color-options/'+ colorOptions[selectedColor].folder + '/image-0.jpeg';
    miniImg1.src = './src/img/color-options/'+ colorOptions[selectedColor].folder + '/image-1.jpeg';
    miniImg2.src = './src/img/color-options/'+ colorOptions[selectedColor].folder + '/image-2.jpeg';

    imgView.src = './src/img/color-options/'+ colorOptions[selectedColor].folder + '/image-' + selectedImg+'.jpeg';
}