/* Desafio 01 - Inicio*/

function btn() {

    var valor1 = document.getElementById('name').value;
    var valor2 = document.getElementById('idade').value;
    var valor3 = document.getElementById('skills').value;

    document.querySelector('#resultado').innerHTML = "Prazer em conhecer você " + valor1 + ", você tem " + valor2 + " Anos, e está aprendendo " + valor3 + ".<br>Parabéns pela sua dedicação ^^";

    if (valor1 == "") {
    document.querySelector('#resultado').innerHTML = "Preencha com os dados";
    valor1.name.focus();
    return false;
    }
    if (valor2 == "") {
    document.querySelector('#resultado').innerHTML = "Preencha com os dados";
    valor2.idade.focus();
    return false;
    }
    if (valor3 == "") {
    document.querySelector('#resultado').innerHTML = "Preencha com os dados";
    valor3.skills.focus();
    return false;
    }
}

/* Desafio 01 - Fim*/


/* Desafio 02 -Inicio*/

function calcular(){

    if(troco.value != ""){
        var moedaUmReal = 1 * troco.value + 0;
        var moedaCinq = moedaUmReal * 2;
        var moedaVin = moedaUmReal * 4;
        var moedaDez = moedaUmReal * 10;
        var moedaCinc = moedaUmReal * 20;

        result.innerHTML += "Você vai receber " + moedaUmReal + " moedas de 1 Real de troco<br>";
        result.innerHTML += "Você vai receber " + moedaCinq + " moedas de 50 Centavos de troco<br>";
        result.innerHTML += "Você vai receber " + moedaVin + " moedas de 25 Centavos de troco<br>";
        result.innerHTML += "Você vai receber " + moedaDez + " moedas de 10 Centavos de troco<br>";
        result.innerHTML += "Você vai receber " + moedaCinc + " moedas de 5 Centavos de troco<br>";
    }
}

/* Desafio 02 - Fim*/

/* Desafio 03 - Inicio*/

function btn2(){
    const frase= document.querySelector("#frase").value
    let arraypalavra= frase.split(" ")
    arraypalavra=arraypalavra.length
    let arrayfrase=frase.split(".")
    for(i in arrayfrase){
        if(arrayfrase[i]==""){
            arrayfrase.splice(i,i)
        }
    }
    arrayfrase= arrayfrase.length
    let letras=frase
    for(i in frase){
        letras = letras.replace(" ","")
        letras = letras.replace(",","")
        letras = letras.replace(".","")
    }
    letras= letras.length
    const resultado= document.querySelector("#fresultado")
    fresultado.innerHTML=fresultado.innerHTML +`Esse paragrafo tem ${letras} letras, ${arraypalavra} palavras, e ${arrayfrase} frases.<br>`

}

/* Desafio 03 - Fim*/

/* Desafio Extra - Inicio*/

var captar = "";
function chamar (){
    captar = document.getElementById('name').value;
    document.getElementById('nome').innerHTML = captar;

    captar = document.getElementById('idade').value;
    document.getElementById('idades').innerHTML = captar;

    captar = document.getElementById('skills').value;
    document.getElementById('skill').innerHTML = captar;
}

/* Desafio Extra - Fim*/