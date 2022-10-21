// Primeira estrutura de dados -> o array
const array = [15, 12, 21, 24, 17, 18];

// A manipulação abaixo é uma manipulação considerando
// esta estrutura como uma PILHA de dados

const pilha = [...array];

// Adicionando um novo elemento à pilha
pilha.push(45);

console.log(pilha);

// Retirar um elemento do topo da pilha
let elem = pilha.pop();

console.log(`Elemento removido: ${elem}`);
console.log(pilha);

elem = pilha.pop();

console.log(`Elemento removido: ${elem}`);
console.log(pilha);

// Intuição do conceito de pilha -> pilha de excução

function mostraPalavraRecursiva(palavra) {
    if (palavra == "") return;
    
    console.log(`Empilhando chamada de: ${palavra}`);
    mostraPalavraRecursiva(palavra.substring(1));
    console.log(`Desempilhando chamada de: ${palavra}`);
}

mostraPalavraRecursiva("Lucas");

// Fatorial
// Solução de vocês!!

// Uso da recursão "obrigatório"
// Descobrir a soma de todos os elementos do array abaixo
const nums = [1, 3, [2, 3, 5], [12, [[45, 6, 23]]], 2, 7, 8, [1, 3, 9]];

function somaArrayRecursiva(array) {
    let soma = 0;
    for (let elem of array) {
        if (typeof elem == "number") {
            soma += elem;
        } else {
            soma += somaArrayRecursiva(elem);
        }
    }

    return soma;
}

console.log(`A soma do array nums é: ${somaArrayRecursiva(nums)}`);

// Criar uma classe pilha
class Pilha {
    constructor(maximo = 10) {
        this.array = [];
        this.total_elementos = 0;
        this.maximo_elementos = maximo;
    }

    empilhar(num) {
        if (this.total_elementos >= this.maximo_elementos) {
            console.error("Pilha está cheia! Não é possível adicionar mais elementos nela.");
            return;
        }

        this.array.push(num);
        this.total_elementos += 1;
    }

    desempilhar() {
        if (this.total_elementos == 0) {
            console.error("Pilha está vazia! Não é possível retirar mais elementos dela.");
            return;
        }

        const removido = this.array.pop();
        console.log(`O elemento removido foi: ${removido}`);
        this.total_elementos -= 1;
    }
}

const array_inicial = [4, 5, 6, 7, 8];
const pilha_obj = new Pilha(5);

for (let num of array_inicial) {
    pilha_obj.empilhar(num);
}

pilha_obj.empilhar(6);
console.log(pilha_obj.array);

pilha_obj.desempilhar();
pilha_obj.desempilhar();
pilha_obj.desempilhar();
console.log(pilha_obj.array);

pilha_obj.desempilhar();
pilha_obj.desempilhar();
pilha_obj.desempilhar();

// A manipulação abaixo é uma manipulação considerando
// esta estrutura como uma PILHA de dados

const alunos = ["Márcia", "Karen", "Gwang", "Mateus", "Beatriz"];

const fila = [...alunos];

console.log(fila);

// Adicionando um novo elemento à fila
fila.push("Gustavo");

console.log(fila);

// Retirar um elemento do início da fila
elem = fila.shift()

console.log(`Aluno atendido: ${elem}`);
console.log(fila);

elem = fila.shift()

console.log(`Aluno atendido: ${elem}`);
console.log(fila);

class Fila {
    constructor(maximo = 10) {
        this.array = [];
        this.total_pessoas = 0;
        this.maximo_pessoas = maximo;
    }

    adicionar(...pessoas) {
        for (let pessoa of pessoas) {
            if (this.total_pessoas >= this.maximo_pessoas) {
                console.error("Fila está cheia! Não é possível atender mais pessoas.");
                return;
            }

            this.array.push(pessoa);
            this.total_pessoas += 1;
        }
    }

    atender() {
        if (this.total_pessoas == 0) {
            console.error("Fila está vazia! Não existem pessoas para serem atendidas.");
            return;
        }

        const atendida = this.array.shift();
        console.log(`A pessoa que foi atendida: ${atendida}`);
        this.total_pessoas -= 1;
    }
}

const fila_obj = new Fila();

for (let aluno of alunos) {
    fila_obj.adicionar(aluno);
}

console.log(fila_obj);

fila_obj.adicionar("Cauan", "Caroline", "Lucas", "Jennifer");

console.log(fila_obj);

fila_obj.adicionar(..."Luís Fernando"); // Dúvida sobre caracteres separados

console.log(fila_obj);

// Rodando 11 vezes o método de atendimento
for (let i=0; i<11; i++) {
    fila_obj.atender();
}