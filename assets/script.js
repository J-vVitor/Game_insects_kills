var mosquito = document.querySelector('.mosquito');

var altura = 0;
var largura = 0;

function tamanhoPalco() {
    altura = window.innerHeight - 90;
    largura = window.innerWidth - 90;

    console.log(altura, largura);
}

tamanhoPalco()

function posicaoRandomica(){

    var mosquito = document.querySelector('.mosquito');
    var posX = Math.floor(Math.random() * largura);
    var posY = Math.floor(Math.random() * altura);

    console.log(posX, posY);

    mosquito.style.position = "absolute"
    mosquito.style.top = posY + 'px'
    mosquito.style.left = posX + 'px'
}








