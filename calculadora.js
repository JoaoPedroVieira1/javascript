var numeroAtual = "";
var numeroAnterior = "";
var operador = "";

function addNumero(n){
    numeroAtual += n;
    document.getElementById("display").value = numeroAtual; 
}

function adicao(){
    numeroAnterior = numeroAtual;
    operador = "+";
    numeroAtual = "";
}

function subtracao(){
    numeroAnterior = numeroAtual;
    operador = "-";
    numeroAtual = "";
}

function multip(){
    numeroAnterior = numeroAtual;
    operador = "*";
    numeroAtual = "";
}

function divisao(){
    numeroAnterior = numeroAtual;
    operador = "/";
    numeroAtual = "";
}

function calcular(){
    var n1 = parseFloat(numeroAnterior);
    var n2 = parseFloat(numeroAtual);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite numeros válidos");
        return;
    }

    var res;

    switch(operador){
        case "+":
            res = n1 + n2;
            break;
        case "-":
            res = n1 - n2;
            break;
        case "*":
            res = n1 * n2;
            break;
        case "/":
            res = n1 / n2;
            break;
        default:
            res = "Operador inválido";
            break;
    }

    document.getElementById("display").value = res;
    numeroAtual = res.toString();
}

function limpar(){
    numeroAtual = "";
    numeroAnterior = "";
    operador = "";
    document.getElementById("display").value = "";
}
