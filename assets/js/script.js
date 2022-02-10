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

    function btn2 () {
    
    var trocado = document.querySelector('#troco').value;

    

    }

/* Desafio 02 - Fim*/

/* Desafio 03 - Inicio*/


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