
const base = parseFloat(prompt("Digite a base:"));
const expoente = parseInt(prompt("Digite o expoente:"));

// Calcula a potência manualmente
let resultado = 1;
for (let i = 0; i < expoente; i++) {
    resultado *= base;
}

// Exibe o resultado
console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);

let numerosPares = 0;
let numerosImpares = 0;

for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            numerosPares++;
        } else {
            numerosImpares++;
        }
    } else {
        console.log("Valor inválido. Digite um número inteiro válido.");
        i--;  // Repete a iteração para obter um novo número
    }
}

console.log(`Quantidade de números pares: ${numerosPares}`);
console.log(`Quantidade de números ímpares: ${numerosImpares}`);

function gerarFibonacciAteLimite(limite) {
    let penultimo = 0;
    let ultimo = 1;
    let numero = 0;

    console.log("Série de Fibonacci até que o valor seja maior que 500:");
    console.log(penultimo);

    while (numero <= limite) {
        console.log(numero);
        numero = penultimo + ultimo;
        penultimo = ultimo;
        ultimo = numero;
    }
}


gerarFibonacciAteLimite(500);

const numero = parseInt(prompt("Digite um número inteiro positivo:"));


if (numero < 0) {
    console.log("Erro: Digite um número inteiro positivo.");
} else {
    // Calcula o fatorial manualmente
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    
    console.log(`O fatorial de ${numero} é igual a ${resultado}.`);
}

function calcularEstatisticas(numeros) {
    let menor = Number.POSITIVE_INFINITY;
    let maior = Number.NEGATIVE_INFINITY;
    let soma = 0;

    for (const numero of numeros) {
        menor = Math.min(menor, numero);
        maior = Math.max(maior, numero);
        soma += numero;
    }

    console.log(`Menor valor: ${menor}`);
    console.log(`Maior valor: ${maior}`);
    console.log(`Soma dos valores: ${soma}`);
}


const conjuntoNumeros = [10, 5, 8, 3, 12, 7];
calcularEstatisticas(conjuntoNumeros);


const num = parseInt(prompt("Digite um número inteiro positivo entre 0 e 1000:"));


if (num >= 0 && numero <= 1000) {
    // Calcula o fatorial manualmente
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    // Exibe o resultado
    console.log(`O fatorial de ${numero} é igual a ${fatorial}.`);
} else {
    console.log("Erro: Digite um número inteiro positivo entre 0 e 1000.");
}


function calcularFatorial(numero) {
    if (numero < 0 || numero >= 16) {
        return null;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

while (true) {
    const entrada = parseInt(prompt("Digite um número inteiro positivo e menor que 16 (ou digite 0 para sair):"));
    if (entrada === 0) {
        break;
    }

    const resultado = calcularFatorial(entrada);
    if (resultado !== null) {
        console.log(`O fatorial de ${entrada} é igual a ${resultado}.`);
    } else {
        console.log("Erro: Digite um número inteiro positivo e menor que 16.");
    }
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    // Verifica se o número é divisível por algum valor entre 2 e a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const userInput = parseInt(prompt("Digite um número inteiro positivo:"));
if (isPrime(userInput)) {
    console.log(`${userInput} é um número primo!`);
} else {
    console.log(`${userInput} não é um número primo.`);
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return i;  // Retorna o primeiro divisor encontrado
        }
    }

    return true;
}

const Input = parseInt(prompt("Digite um número inteiro positivo:"));
const result = isPrime(Input);

if (result === true) {
    console.log(`${userInput} é um número primo!`);
} else {
    console.log(`${userInput} não é um número primo. É divisível por ${result}.`);
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    // Verifica se o número é divisível por algum valor entre 2 e a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return i;  // Retorna o primeiro divisor encontrado
        }
    }

    return true;
}

const uInput = parseInt(prompt("Digite um número inteiro positivo:"));
const a = isPrime(uInput);

if (a === true) {
    console.log(`${userInput} é um número primo!`);
} else {
    console.log(`${userInput} não é um número primo. É divisível por ${result}.`);
}

function calcularMediaAritmetica(notas) {
    const totalNotas = notas.length;
    const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
    const media = somaNotas / totalNotas;
    return media;
}

const numNotas = parseInt(prompt("Digite o número de notas:"));
const notas = [];

for (let i = 0; i < numNotas; i++) {
    const nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
    notas.push(nota);
}

const mediaFinal = calcularMediaAritmetica(notas);
console.log(`A média das notas é: ${mediaFinal.toFixed(2)}`);

