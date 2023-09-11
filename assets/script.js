
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

function tamanhoPalco() {
    altura = window.innerHeight - 90;
    largura = window.innerWidth - 90;

    console.log(altura, largura);


}

tamanhoPalco()

var cronometro = setInterval(function () {
    tempo -= 1

    if(tempo < 0 ){ 
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }

  
}, 1000)


// Criando elemento

function posicaoRandomica() {

    //Removendo mosquito anterior

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()


        // SE TODOS OS CORAÇÕES ACABAREM, GAME OVER
        if (vidas > 3) {
            window.location.href = 'end_of_the_game.html'
        } else {
            document.getElementById('v' + vidas).src = 'assets/img/coracao_vazio.png'
        }

        vidas++
    }


    //POSCIÇÕES RANDOM
    var posX = Math.floor(Math.random() * largura)
    var posY = Math.floor(Math.random() * altura)

    console.log(posX, posY)

    var mosquito = document.createElement('img')
    mosquito.src = 'assets/img/mosca.png'

    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.id = 'mosquito'

    mosquito.onclick = function () {
        this.remove()
    }


    document.body.appendChild(mosquito)

    console.log(tamanhoAleatorio())
}

function tamanhoAleatorio() {
    var tamanhos = Math.floor(Math.random() * 3)

    switch (tamanhos) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)

    switch (lado) {
        case 0:
            return 'ladoD'

        case 1:
            return 'ladoE'
    }
}