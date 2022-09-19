// As três funções de Array de alta ordem mais importantes

const array_obj_alunos = [
    {
        "nome": "Luís",
        "matricula": 11111,
        "coef_rend": 7.1,
        cpf: 1231231235,
        notas: [3, 5, 6]
    },
    {
        "nome": "Caroline",
        "matricula": 22222,
        "coef_rend": 8.2,
        cpf: 1231231235,
        notas: [3, 5, 6, 7]
    },
    {
        "nome": "Andressa",
        "matricula": 33333,
        "coef_rend": 9.3,
        cpf: 1231231235,
        notas: [8, 9, 9.4, 8.3]
    },
];

const array_nomes = [];
for (let obj of array_obj_alunos) {
    array_nomes.push(obj.nome);
}
console.log(array_nomes);

// map serve para mapear os dados de um array (transformar eles, ou enxugar o conteúdo)
console.log(array_obj_alunos.map((obj) => obj.nome));

const notas = [3, 5, 6, 7];
console.log(notas.map(valor => valor*2));

// filter -> filtrar o conteúdo do array com base em uma condição
console.log(array_obj_alunos.filter((obj) => obj.coef_rend > 8));

console.log(array_obj_alunos.filter((obj) => {
    // let soma = 0;
    // for (let nota of obj.notas) {
    //     soma = soma + nota;
    // }
    // return soma/obj.notas.length < 6;

    // let soma = obj.notas.reduce((prev, curr) => {
    //     return prev + curr;
    // }, 0);
    let soma = obj.notas.reduce((soma, nota) => soma + nota, 0);
    return soma/obj.notas.length < 6;
}));

console.log((array_obj_alunos.reduce((soma, { coef_rend, ...resto_obj }) => { 
    console.log(resto_obj);
    return soma + coef_rend;
}, 0)/array_obj_alunos.length).toFixed(2));

function printa_obj({ cpf, nome }) {
    console.log(`${cpf} -> ${nome}`);
}

printa_obj(array_obj_alunos[0]);

console.log(array_obj_alunos.reduce((prev, curr) => {
    // prev.push(curr.nome);
    // return prev;

    return [...prev, curr.nome];
}, []));

// Recursão
const array_nums = [ 1, 2, [2, 3, 4, [4, 5, 6]], 9, 0, 8, [10, 23] ];

// Fibonacci -> fb(n) = fb(n-1) + fb(n-2)

function fibonacci(n) {
    if (n == 0 || n == 1) return 1;

    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(7));

function fatorial(n) {
    if (n == 1) return 1;
    return n * fatorial(n-1);
}

fatorial(5);

function print_letras(string) {
    if (string == "") return;
    console.log(string);
    print_letras(string.substring(1));
    console.log(string);
}

print_letras("ABACAXI");

function soma_array_recursiva(array) {
    let soma = 0;
    for (let elem of array) {
        if (typeof elem == "number") {
            soma += elem;
        } else if (typeof elem == "object") { // caso em que o elemento é um array
            soma += soma_array_recursiva(elem);
        }
    }

    return soma;
}

console.log(soma_array_recursiva(array_nums));