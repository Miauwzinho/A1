function obterNotaValida() {
    while (true) {
        const nota = parseFloat(prompt("Digite uma nota entre zero e dez:"));
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            return nota;
        } else {
            alert("Valor inválido. A nota deve estar entre zero e dez.");
        }
    }
}


const notaValida = obterNotaValida();


console.log(`A nota válida informada é: ${notaValida}`);

function obterCredenciais() {
    while (true) {
        const usuario = prompt("Digite o nome de usuário:");
        const senha = prompt("Digite a senha:");

        if (usuario !== senha) {
            alert("Credenciais válidas!");
            break;
        } else {
            alert("Erro: A senha não pode ser igual ao nome de usuário. Tente novamente.");
        }
    }
}


obterCredenciais();

function obterInformacoesValidas() {
    while (true) {
        const nome = prompt("Digite o nome (maior que 3 caracteres):");
        if (nome.length > 3) {
            break;
        } else {
            alert("Erro: O nome deve ter mais de 3 caracteres.");
        }
    }

    while (true) {
        const idade = parseInt(prompt("Digite a idade (entre 0 e 150):"));
        if (!isNaN(idade) && idade >= 0 && idade <= 150) {
            break;
        } else {
            alert("Erro: A idade deve estar entre 0 e 150.");
        }
    }

    while (true) {
        const salario = parseFloat(prompt("Digite o salário (maior que zero):"));
        if (!isNaN(salario) && salario > 0) {
            break;
        } else {
            alert("Erro: O salário deve ser maior que zero.");
        }
    }

    while (true) {
        const sexo = prompt("Digite o sexo ('f' para feminino, 'm' para masculino):");
        if (sexo.toLowerCase() === 'f' || sexo.toLowerCase() === 'm') {
            break;
        } else {
            alert("Erro: Digite 'f' para feminino ou 'm' para masculino.");
        }
    }

    while (true) {
        const estadoCivil = prompt("Digite o estado civil ('s', 'c', 'v' ou 'd'): ");
        if (estadoCivil.toLowerCase() === 's' || estadoCivil.toLowerCase() === 'c' || estadoCivil.toLowerCase() === 'v' || estadoCivil.toLowerCase() === 'd') {
            break;
        } else {
            alert("Erro: Digite 's' para solteiro, 'c' para casado, 'v' para viúvo ou 'd' para divorciado.");
        }
    }

    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Salário: ${salario}`);
    console.log(`Sexo: ${sexo}`);
    console.log(`Estado Civil: ${estadoCivil}`);
}


obterInformacoesValidas();


function calcularCrescimentoPopulacional(populacaoA, taxaA, populacaoB, taxaB) {
    let anos = 0;
    while (populacaoA < populacaoB) {
        populacaoA *= (1 + taxaA / 100);
        populacaoB *= (1 + taxaB / 100);
        anos++;
    }
    return anos;
}


const anosNecessarios = calcularCrescimentoPopulacional(80000, 3, 200000, 1.5);
console.log(`Serão necessários ${anosNecessarios} anos para que a população do país A ultrapasse ou iguale a população do país B.`);

function obterDadosPopulacionais() {
    while (true) {
        const populacaoA = parseInt(prompt("Digite a população do país A:"));
        const taxaA = parseFloat(prompt("Digite a taxa de crescimento do país A (%):"));
        const populacaoB = parseInt(prompt("Digite a população do país B:"));
        const taxaB = parseFloat(prompt("Digite a taxa de crescimento do país B (%):"));

        if (!isNaN(populacaoA) && !isNaN(taxaA) && !isNaN(populacaoB) && !isNaN(taxaB)) {
            const anos = calcularCrescimentoPopulacional(populacaoA, taxaA, populacaoB, taxaB);
            console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
            break;
        } else {
            alert("Erro: Insira valores numéricos válidos.");
        }
    }
}


obterDadosPopulacionais();


console.log("Números de 1 a 20 (abaixo do outro):");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("\nNúmeros de 1 a 20 (ao lado do outro):");
for (let i = 1; i <= 20; i++) {
    process.stdout.write(i + " ");  // O uso de process.stdout.write() evita a quebra de linha automática
}
console.log();

console.log("Digite 5 números:");

let mNumero = Number.NEGATIVE_INFINITY;  // Inicializa com o menor valor possível

for (let i = 0; i < 5; i++) {
    const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    if (!isNaN(numero)) {
        mNumero = Math.max(mNumero, numero);
    } else {
        console.log("Valor inválido. Digite um número válido.");
        i--;  
    }
}

console.log(`O maior número é: ${mNumero}`);

console.log("Números ímpares entre 1 e 50:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

function gerarNumerosInteirosNoIntervalo(numero1, numero2) {
    const inicio = Math.min(numero1, numero2);
    const fim = Math.max(numero1, numero2);

    console.log(`Números inteiros entre ${inicio} e ${fim}:`);
    for (let i = inicio; i <= fim; i++) {
        console.log(i);
    }
}


const numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
const numero2 = parseInt(prompt("Digite o segundo número inteiro:"));


gerarNumerosInteirosNoIntervalo(numero1, numero2);



console.log("Digite 5 números:");

let maiorNumero = Number.NEGATIVE_INFINITY;  l
let somaTotal = 0;

for (let i = 0; i < 5; i++) {
    const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    if (!isNaN(numero)) {
        maiorNumero = Math.max(maiorNumero, numero);
        somaTotal += numero;
    } else {
        console.log("Valor inválido. Digite um número válido.");
        i--;  
    }
}

console.log(`O maior número é: ${maiorNumero}`);
console.log(`A soma dos números é: ${somaTotal}`);


const numero = parseInt(prompt("Digite um número inteiro entre 1 e 10:"));


if (numero >= 1 && numero <= 10) {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
} else {
    console.log("Número inválido. Digite um número entre 1 e 10.");
}





