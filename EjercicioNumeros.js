let numeros = [11, 33, 2, -1, 110, 99, 8];
let NumerosImpares = [];
let NumeroFinal;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 != 0){
        NumerosImpares[i] = numeros[i];    
    }
 
}
NumerosImpares.sort(function(a, b){return b - a});

console.log(NumerosImpares[1]);

//

let numeros2 = [11, 33, 2, -1, 110, 99, 8];
let numerosImpares = numeros2.filter(numeros2 => numeros2 % 2 != 0);