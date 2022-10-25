// Procurar um elemento em um array
const array = [];
for (let i=0; i<10000000; i++) array[i] = i+1;

console.log(array.indexOf(11));

Array.prototype.indexOf2 = function(numero) {
    // Busca linear
    for (let i = 0; i<this.length; i++) {
        if (numero == this[i]) return i;
        // else return -1;
    }

    return -1;
}

console.log(array.indexOf2(9));

const array2 = [10, 11, 21, 34, 42, 56, 63];

function buscaBinaria(array, numero, ini = 0, fim = array.length - 1) {
    const meio = Math.floor((ini + fim)/2);

    if (ini > fim) return -1;

    if (array[meio] == numero) {
        return meio;
    } else if (numero < array[meio]) {
        return buscaBinaria(array, numero, ini, meio - 1);
    } else  {
        return buscaBinaria(array, numero, meio + 1, fim);
    }
}

console.log(buscaBinaria(array2, 11));

Array.prototype.binarySearchRec = function(numero, ini = 0, fim = this.length - 1) {
    const meio = Math.floor((ini + fim)/2);

    if (ini > fim) return -1;

    if (this[meio] == numero) {
        return meio;
    } else if (numero < this[meio]) {
        return this.binarySearchRec(numero, ini, meio - 1);
    } else  {
        return this.binarySearchRec(numero, meio + 1, fim);
    }
}

console.log(array2.binarySearchRec(23));
console.log(array2.binarySearchRec(63));
console.log(array2.binarySearchRec(56));
console.log(array.binarySearchRec(6));

Array.prototype.binarySearchIter = function (numero) {
    let ini = 0;
    let fim = this.length - 1;
    let meio;
    while(ini <= fim) {
        meio = (ini + fim)/2;
        if (numero == this[meio]) return meio;
        else if (numero > this[meio]) ini = meio + 1;
        else fim = meio - 1;
    }

    return -1;
}

console.log(array2.binarySearchIter(23));
console.log(array2.binarySearchIter(63));
console.log(array2.binarySearchIter(56));
console.log(array.binarySearchIter(6));

let startTime = performance.now();

array.indexOf2(567);

let endTime = performance.now();

let diff1 = endTime - startTime;

console.log(`Busca linear levou ${diff1} milliseconds`);

startTime = performance.now();

array.binarySearchIter(567);

endTime = performance.now();

let diff2 = endTime - startTime;

console.log(`Busca binária levou ${diff2} milliseconds`);

console.log(diff1 > diff2);