// Funções de Alta Ordem
// É uma função que retorna outra função ou
// Uma função que recebe outra como parâmetro

// São funções que vem com qualquer "Objeto" do tipo Array
const notas = [4.5, 6.7, 8.9, 2.3, 2.6];
notas.sort((a, b) => b - a);
console.log(notas);

// Exemplo de uma função de alta ordem
function print_condicional(numero, callback = () => {}) {
    if (numero > 4)
        // if (callback) callback();
        callback();
    else
        console.log("Não entrou na condição!");
}

print_condicional(6);
// print_condicional(5, () => { 
//     console.log("Entrou na condição!")
// });

// Segundo exemplo de função de alta ordem
function desejar_feliz_aniversario(data, parabens) {
    // se chegou na data do aniversario
    // chama o parabens (é um função)
}

// foreach
notas.forEach((value, index) => {
    console.log(value + index*2);
});

// Exemplo de implementação do foreach "por trás dos panos"
const forEach = function(func){
    for(let i = 0; i < notas.length; i++){
        func(notas[i], i, notas);
    }
}

// Uma pausa para falar de objetos...

// Como faríamos sem objetos
const alunos = [
    ["Luís", 11111, 7.1, 1231231235],
    ["Caroline", 22222, 8.2, 1231231235],
    ["Andressa", 33333, 9.3, 1231231235]
];

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
]

function solicita_informacoes(alunos) {
    const nome = prompt("Digite o seu nome");
    const matricula = prompt("Digite a sua matricula");
    const coef_rend = parseFloat(prompt("Digite o seu coeficiente de rendimento"));
    const cpf = parseInt(prompt("Digite o seu cpf"));

    alunos.push({
        nome,
        "matrícula": matricula,
        CR: coef_rend,
        // "coeficiente de rendimento": coef_rend,
        cpf
    });
}

// find -> encontra o primeiro elemento do array que respeita a condição passada
console.log(array_obj_alunos.find((obj) => {
    let soma = 0;
    for (let nota of obj.notas) {
        soma += nota;
    }

    const media = soma/obj.notas.length;
    return media > 6;
}));

// findIndex -> encontra o índice do primeiro elemento do array que respeita a condição passada
console.log(array_obj_alunos.findIndex((obj) => {
    let soma = 0;
    for (let nota of obj.notas) {
        soma += nota;
    }

    const media = soma/obj.notas.length;
    return media > 6;
}));

// every -> retorna true quando todos os elementos do array respeitam a condição passada
console.log(array_obj_alunos.every((obj) => obj.nome < 'M'));
console.log(array_obj_alunos.some((obj) => obj.nome < 'F'));

// includes -> retorna true se um elemento existe dentro de um array
const palavra = "ABACAXI";
const letra = "a".toUpperCase();

console.log(palavra.includes(letra));

// Converter string para array -> necessário quando se quer alterar a string
// Devemos convertê-la para array, atualizá-la e trazê-la de volta como string
let string_inicial = "";
for (let i in palavra) {
    // palavra[i] = "_";
    string_inicial += "_"
}
const array_string = string_inicial.split("");

if (palavra.includes(letra)) {
    // trocar _ em todas as posições em que existir a letra digitada na minha palavra original
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == letra) {
            array_string[i] = letra;
        }
    }
    console.log("Acertou!");
} else {
    console.log("Errou!");
}

console.log(array_string);

// Como converter um array em uma string... EM SOMENTE UMA LINHA
console.log(array_string.join(''));