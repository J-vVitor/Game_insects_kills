var mosquito = document.querySelector('#mosquito');

var altura = window.innerHeight - 50;
var largura = window.innerWidth - 50;


mosquito.addEventListener("mouseover", () => {
    mosquito.style.position = "absolute"
    mosquito.style.top = Math.random() * altura + "px";
    mosquito.style.left =Math.random() * largura + "px";

})