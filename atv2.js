// Solicita ao usuário seu peso e altura
var peso = parseFloat(prompt("Digite seu peso em quilogramas (kg):"));
var altura = parseFloat(prompt("Digite sua altura em metros (m):"));

// Calcula o IMC
var imc = peso / (altura * altura);

// Determina a categoria do IMC
var categoria;
if (imc < 18.5) {
    categoria = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    categoria = "Peso normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    categoria = "Excesso de peso";
} else if (imc >= 30.0 && imc <= 34.9) {
    categoria = "Obesidade grau I";
} else if (imc >= 35.0 && imc <= 39.9) {
    categoria = "Obesidade grau II";
} else {
    categoria = "Obesidade grau III";
}

// Exibe o IMC e a categoria
console.log("Seu IMC é:", imc.toFixed(2));
console.log("Categoria do IMC:", categoria);
//----------------------------------------

var numeroSecreto = Math.floor(Math.random() * 100) + 1;


var palpite;


while (true) {
    
    palpite = parseInt(prompt("Adivinhe o número secreto (entre 1 e 100):"));

    
    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você adivinhou o número secreto:", numeroSecreto);
        break; 
    } else if (palpite < numeroSecreto) {
        console.log("O número secreto é maior que o seu palpite.");
    } else {
        console.log("O número secreto é menor que o seu palpite.");
    }
}
//----------------


var dataNascimento = prompt("Digite sua data de nascimento no formato DD/MM/AAAA:");


var partesData = dataNascimento.split('/');
var dia = parseInt(partesData[0]);
var mes = parseInt(partesData[1]) - 1;
var ano = parseInt(partesData[2]);


var dataAtual = new Date();


var idade = dataAtual.getFullYear() - ano;
if (dataAtual.getMonth() < mes || (dataAtual.getMonth() === mes && dataAtual.getDate() < dia)) {
    idade--; 
}


console.log("Sua idade é:", idade);


if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
//-------------------------------------------------------

var lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
var lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
var lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));


if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo válido.");
}

//----------------------------------------------


var valorSaque = parseInt(prompt("Digite o valor que deseja sacar:"));


if (valorSaque % 10 === 0) {
    console.log("Saque realizado com sucesso.");
} else {
    console.log("Valor inválido. Digite um valor múltiplo de 10.");
}


