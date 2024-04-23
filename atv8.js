function calculoRecursivo(N) {

    if (N === 1) {
        return 1;
    }
    
  
    return N + calculoRecursivo(N - 1);
}


const numero = 5;
const resultado = calculoRecursivo(numero);
console.log("O resultado do cálculo é:", resultado);

//-------------------------------------------------


function somaInversosRecursiva(N) {
    
    if (N === 1) {
        return 1;
    }
    
   
    return 1 / N + somaInversosRecursiva(N - 1);
}

// Exemplo de uso:
const num = 5;
const result = somaInversosRecursiva(num);
console.log("O resultado do cálculo é:", result);

//------------------------------------
