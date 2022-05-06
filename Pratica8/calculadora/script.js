var operador = 0;
var valor1 = '';
var valor2 = '';
var calculo;

function getValues(p, valor) {

    if (valor == 1) {
        if (operador != 0) {
            addValor2(p);
        }
        else {
            addValor1(p);
        }
    }
    else {
        addOperador(p);
    }
}

function addValor1(p) {
    valor1 += p;
    document.getElementById("resposta").innerHTML += (p + ' ');
}

function addOperador(p) {
    operador = p;
    document.getElementById("resposta").innerHTML += (p + ' ');
}

function addValor2(p) {
    valor2 += p;
    document.getElementById("resposta").innerHTML += (p + ' ');
}

function limpar() {
    operador = 0;
    valor1 = '';
    valor2 = '';
    document.getElementById('resposta').innerHTML = ' ';
}

function calcular() {

    if (operador == '+') {
        calculo = parseFloat(valor1) + parseFloat(valor2);
    }
    else if (operador == '-') {
        calculo = parseFloat(valor1) - parseFloat(valor2);
    }
    else if (operador == 'x') {
        calculo = parseFloat(valor1) * parseFloat(valor2);
    }
    else if (operador == '/') {
        calculo = parseFloat(valor1) / parseFloat(valor2);
    }

    document.getElementById("resposta").innerHTML = calculo;    
}