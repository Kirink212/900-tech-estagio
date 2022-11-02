// Complexidade de Algoritmo de forma simplificada

// Busca Linear -> O(n)
// Busca Binária -> O(logn)

const array = [12, 2, 9, 4, 17, 24, 3];

// Bubble Sort -> O(n^2)

function bubbleSortRec(array, tam = array.length) {
    if (tam <= 1) return;

    let trocas = 0;

    console.log("Entrei na Bubble Sort");

    for (let i=0; i<tam-1; i++) {
        if (array[i] > array[i+1]) {
            let aux = array[i];
            array[i] = array[i+1];
            array[i+1] = aux;
            trocas++;
        }
    }

    if (trocas == 0) return array; // Otimização

    bubbleSortRec(array, tam - 1);

    return array;
}

function bubbleSort(array) {
    for (let tam=length-1; tam > 1; tam--) {
        let trocas = 0;
        console.log("Rodei a lógica da Bubble Sort");

        for (let j=0; j < tam-1; j++) {
            if (array[j] > array[j+1]) {
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
                trocas++;
            }
        }

        if (trocas == 0) break; // Otimização
    }

    return array;
}

// const array2 = [1, 2, 3, 7, 5, 6]; -> Array para teste da otimização

// console.log(bubbleSortRec(array));
// console.log(bubbleSort(array));

// Insertion Sort -> O(n^2)
function insertionSort(array) {
    for (let i=0; i<array.length; i++) {
        // for (let j=i; j >= 0; j--) {
        //     if (array[j] < array[j-1]) {
        //         let aux = array[j];
        //         array[j] = array[j-1];
        //         array[j-1] = aux;
        //     } else {
        //         break;
        //     }
        // }

        let j = i;
        while(array[j] < array[j-1]) {
            let aux = array[j];
            array[j] = array[j-1];
            array[j-1] = aux;
            j--;
        }
    }

    return array;
}
// console.log(insertionSort(array));

// Merge Sort

function merge(left, right) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            mergedArray.push(left[i]);
            i++;
        } else if (right[j] < left[i]) {
            mergedArray.push(right[j]);
            j++;
        }
    }

    if (i < left.length) {
        for (let k=i; k<left.length; k++) {
            mergedArray.push(left[k]);
        }
    } else if (j < right.length) {
        for (let k=j; k<right.length; k++) {
            mergedArray.push(right[k]);
        }
    }

    return mergedArray;
}

function mergeSort(array) {
    const size = array.length;
    if (size <= 1) {
        console.log("Atingiu o caso base");
        return array;
    };

    const meio = Math.floor(size/2);
    const arrayLeft = mergeSort(array.slice(0, meio));
    const arrayRight = mergeSort(array.slice(meio));

    return merge(arrayLeft, arrayRight);
}

// console.log(mergeSort(array));

// Quick Sort

function partition(array, esq, dir) {

}

function quicksortRec(array, ini = 0, fim = array.length - 1) {
    if (ini >= fim) return;

    const pivot = fim;
    let esq = ini;
    let dir = pivot - 1;

    console.log("Este é o pivot desta chamada:", array[pivot]);

    while(esq < dir) {
        // Andar com o ponteiro da esq até encontrar um elemento maior que o pivot,
        // ou até esbarrar no ponteiro da direita
        while(array[pivot] > array[esq]) esq++;

        // Andar com o ponteiro da dir até encontrar um elemento menor que o pivot,
        // ou até esbarrar no ponteiro da esquerda
        while(array[pivot] <= array[dir]) dir--;

        if (esq < dir) {
            // Caso contrário, trocar com o elem da esquerda com o elem da direita
            let aux = array[esq];
            array[esq] = array[dir];
            array[dir] = aux;
            confirm("Confirmar a troca da esquerda com a direita");
            console.log("Array após troca:", array);
        }
    }

    // Caso os índices tenham coincidido, trocar com o pivot
    if (array[esq] > array[pivot]) {
        let aux = array[esq];
        array[esq] = array[pivot];
        array[pivot] = aux;
        confirm("Confirmar a troca do pivot");
        console.log("Array após troca:", array);
    }

    quicksortRec(array, ini, esq-1);
    quicksortRec(array, esq+1, fim);

    return array;
}

const array_quick = [9, 1, 8, 2, 7, 4, 3];
console.log(quicksortRec(array));