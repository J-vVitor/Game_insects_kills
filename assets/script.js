var mosquito = document.querySelector('.mosquito');

var altura = 0;
var largura = 0;

function tamanhoPalco() {
    altura = window.innerHeight - 90;
    largura = window.innerWidth - 90;

    console.log(altura, largura)
}

tamanhoPalco()



function passarCima() {

    var posX = Math.floor(Math.random() * altura)
    var posY = Math.floor(Math.random() * largura)

    console.log(posX, posY)

    mosquito.style.position = "absolute"
    mosquito.style.top = posX + "px"
    mosquito.style.left = posY + "px"
   
    
    
    ladoMosquito();
  
}

function ladoMosquito(){
    var lado = Math.floor(Math.random() * 2)

    if(lado == 0 ){
       mosquito.setAttribute('class','mosquitoD')
    }else if( lado == 1){
       mosquito.setAttribute('class','mosquitoE')
    }
}








