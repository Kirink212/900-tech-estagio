//// Variáveis
// var quantidade; -> A declaração é trazida aqui pra cima pelo hoisting

console.log(quantidade); // Hoisting -> mostra "undefined" pois a declaração da variável é puxada para o início do código quando se usa var

// Tipos de Variáveis
var quantidade = 2; // Inteiro
var custo = 10.99; // Float (Reais)
var fez_exercicio = true; // Boolean
var mensagem = "Oi fulaninho, tudo bem? Cadê o dinheiro que você tava me devendo?!!!"; // String

// let/const
// Exemplo abaixo!

//// Input/Output
// let nota1;
// console.log(nota1); -> não é possível usar a variável antes de sua declaração com let
let nota1 = parseFloat(prompt("Digite a sua primeira nota:"));
let nota2 = parseFloat(prompt("Digite a sua segunda nota:"));

const resultado = (nota1 + nota2)/2;
// resultado = 6;
console.log(resultado);
console.log(10 + '18' + 21); // -> prioriza a concatenação

//// Funções

// Função Matemática
// f(x) = x^2 (definindo/declarando/criando)
// f(2) => 4 (chamada/invocação)

// Definição
function elevaAoQuadrado(x) {
    return x**2;
}

// Math.sqrt(2) ou 2**(1/2)-> obter raiz de 2

// Chamada/Invocação
let quadrado_de_dois = elevaAoQuadrado(2);
console.log(quadrado_de_dois);

// Exemplo (função que soma dois números)
function soma_numeros(n1, n2) {
    return n1 + n2;
}
console.log(soma_numeros(5, 3));
console.log(soma_numeros(2, 7));

// Exemplo (função sem retorno)
function solicita_confirmacao() {
    confirm("Você tem certeza que deseja realizar esta operação?");
}

solicita_confirmacao();

function solicita_avaliacao_docente(mensagem) {
    confirm(mensagem);
}

console.log(mensagem);

solicita_avaliacao_docente("Luís é o melhor professor do mundo?");

// Fução serve para:
// - Organizar o código
// - Definir/Separar regras de negócio ou lógicas complexas do código normal
// - Evitar repetição de código
// - Realizar operações matemáticas e retorná-las

// Ambas apontam para a mesma área da memória
const print = console.log;

console.log(print); // Variável é do tipo function
print("Olá, tudo bem?");

// Função anônima
let funcaoSemNome = function () {
    console.log(resultado);
    console.log("Não faço nada...");
}

funcaoSemNome();

// Arrow-function
let funcaoArrow = () => console.log("Função arrow ...");

funcaoArrow();