// Continuando com arrays...

let array = [1, 2, 3, , , undefined, 5, 6, , 8];

console.log(array); // Sim, é possível pular posições, como feito acima

// Como unir/concatenar arrays?
const notas = [4.5, 6.7, 8.1, 7.3];
let notas_extras = [3.1, 4.6, 4.8, 5.7];
console.log(notas.concat(notas_extras));

// notas = [1, 2, 3, 4, 5]; -> NÃO PODE SER FEITO, pois "notas" é constante

console.log(notas_extras.concat(notas, [5.2, 5.5, 8.3]));
console.log(notas.concat(notas, notas, notas));

// Itera nas duplas [indice, valor]
for (let entry of notas.entries()) {
    let index = entry[0];
    let value = entry[1];

    console.log(index, value);
}

// Itera nas nos valores
for (let nota of notas.values()) {
    console.log(nota);
}

// Itera nas nos índices
for (let index of notas.keys()) {
    console.log(index);
}

// Inverter os elementos
console.log(notas.reverse());
console.log(notas); // cuidado pois ela altera o array original!!

// Ordenar os elementos do meu array
console.log(notas.sort());
console.log(notas); // cuidado pois ela altera o array original!!

// Traz a vantagem de acesso rápido à menor (ou maior) nota

// OBS.: Arrays podem ter qualquer tipo de valor em qualquer posições
const array_diverso = [1.4, 5, "Luís Fernando", true, null, [1, 2, 3, 4, 5]];

console.log("Acessando o número 4 dentro do sub-array", array_diverso[5][3]);

// Matrizes (arrays bidimensionais) e como percorrê-las
const tabela_pontos = [
    [6, 7, 7],
    [5, 5, 4],
    [10, 9, 9]
];

for (let linha of tabela_pontos) {
    for (let col of linha) {
        console.log(col);
    }
}

// Bem análogo a matrizes do colégio
for (let i = 0; i < tabela_pontos.length; i++) {
    for (let j = 0; j < tabela_pontos[i].length; j++) {
        console.log(tabela_pontos[i][j]);
    }
}

// Spread operator
console.log(notas);
console.log(...notas);
// console.log(notas[0], notas[1], notas[2], (...));

// Como copiar um array?
const replica_notas = notas;
replica_notas.push(4.3);
console.log(replica_notas);

const copia_notas = [...notas];
notas.push(5.1);
copia_notas.push(7.2);
console.log(copia_notas);
console.log(notas);

// Função que recebe um número indefinido de parâmetros, e junta todos eles em um mesmo array
function soma_numeros(primeiro, ...numeros) {
    let soma = 0;

    console.log("Primeiro número passado por parâmetro", primeiro);
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    return soma;
}

console.log(soma_numeros(1, 2, 3, 4, 5));
console.log(soma_numeros(9, 10));
console.log(soma_numeros(9, 10, 3, 20));
console.log(soma_numeros(9, 10, 3, 20, 10, 10, 2, 3, 4, 51));

// Rest Operator

// Desestruturei o meu array, podendo acessar os elementos individualmente
// Caso eu queira usar o resto dos elementos, eu posso agrupá-los em um sub-array (rest operator)
const [mais_alto, segundo_mais_alto, ...outros_meros_mortais] = [1.72, 1.75, 1.65, 1.86, 1.74].sort((a, b) => b - a);
console.log(mais_alto);
console.log(segundo_mais_alto);
console.log(outros_meros_mortais);