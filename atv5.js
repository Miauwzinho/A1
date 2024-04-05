function exibirMensagemBoasVindas() {
    alert("Bem-vindo! Esperamos que você tenha uma ótima experiência.");
}

window.onload = exibirMensagemBoasVindas;


function verificarParOuImpar(numero) {
    return numero % 2 === 0;
}


function calcularMedia(numeros) {
    var soma = numeros.reduce((total, numero) => total + numero, 0);
    return soma / numeros.length;
}


function converterParaMaiusculas(texto) {
    return texto.toUpperCase();
}

function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


function inverterArray(array) {
    return array.reverse();
}

function calcularValorComPorcentagem(valor, porcentagem) {
    return valor + (valor * porcentagem / 100);
}


function verificarPalindromo(palavra) {
    var reverso = palavra.split('').reverse().join('');
    return palavra === reverso;
}

function converterParaBinario(numero) {
    return numero.toString(2);
}


function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    return numero * calcularFatorial(numero - 1);
}
