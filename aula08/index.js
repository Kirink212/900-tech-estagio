// Window é a representação do escopo global (ou seja, da minha janela do meu browser)
console.log("Este é o valor do this no escopo global:", this);

function soma(a, b) {
    console.log("Este é o valor do this no escopo de uma função:", this);
    return a + b;
}

soma(5, 6);

// Funções dentro de objetos
const aluno_do_luis = {
    nome: "Vinicius Jaques",
    total_presenca: 5,
    total_pontual: 2,
    total_xp_pp() {
        return this.total_presenca*40 + this.total_pontual*30;
    },
    // total_xp_pp: function() {
    //     return this.total_presenca*40 + this.total_pontual*30;
    // }
    // total_xp_pp: () => {
    //     console.log("Aqui na arrow function, o escopo abre:", this);
    //     return this.total_presenca*40 + this.total_pontual*30;
    // }
}

console.log("O total de XP de presença do Vinicius é:", aluno_do_luis.total_xp_pp());

// function cria_aluno(nome, total_pr = 0, total_pt = 0) {
//     return {
//         nome,
//         total_presenca: total_pr,
//         total_pontual: total_pt,
//         total_xp(extra = 0) {
//             console.log("O valor do this aqui é:", this);
//             return this.total_presenca*40 + this.total_pontual*30 + extra;
//         },
//     }
// }

function Aluno(nome, total_pr = 0, total_pt = 0) {
    return {
        nome,
        total_presenca: total_pr,
        total_pontual: total_pt,
        total_xp(extra = 0) {
            console.log("O valor do this aqui é:", this);
            return this.total_presenca*40 + this.total_pontual*30 + extra;
        },
    }
}

const aluno_do_luis2 = new Aluno("Mateus Miquelino", 7);
console.log(aluno_do_luis2);
console.log(aluno_do_luis2.total_xp());

const calcula_total_xp = aluno_do_luis2.total_xp.bind(aluno_do_luis2, 200);

console.log(calcula_total_xp());
console.log(aluno_do_luis2.total_xp.call(aluno_do_luis, 50));

console.log(aluno_do_luis2.total_xp.apply(aluno_do_luis, [150]));

Array.prototype.sum = function() {
    let soma = 0;

    for (let i=0; i<this.length; i++) {
        soma += this[i];
    }

    return soma;
}

Array.prototype.mean = function() {
    return this.sum() / this.length;
}

const array = [1, 2, 3, 4, 5];
console.log(array.sum());

const outro_array = [8, 9, 11, 234];
console.log(outro_array.mean());

// O conceito de Classe é utilizado para representar entidades da vida real
class AlunoDoLuis {
    // Gera a minha objeto/instância
    constructor(nome, total_pr = 0, total_pt = 0) {
        // Atributos são as características que ajudam a definir a minha classe,
        // e cada objeto/instância pertencente a ela
        this.nome = nome;
        this.total_presenca = total_pr;
        this.total_pontual = total_pt;
    }

    // Método nada mais é do que uma funcionalidade (ação) relacionada a uma classe
    calcula_total_xp(xp_extra = 0) {
        return this.total_presenca*40 + this.total_pontual*30 + xp_extra;
    }
}

const karen = new AlunoDoLuis("Karen Kota", 8, 3);
console.log(karen.nome);
console.log(karen["nome"]);

console.log(karen.calcula_total_xp(75));

// Exemplos de classe (Formas Geométricas)
class Quadrado {
    constructor(x, y, lado) {
        this.x = x;
        this.y = y;
        this.lado = lado;
        this.qtd_lados = 4;
    }

    calcula_area() {
        return this.lado**2;
    }

    calcula_perimetro() {
        return this.lado * this.qtd_lados;
    }

    calcula_diagonal() {
        return this.lado * Math.sqrt(2);
    }
}

class Losango {
    constructor(x, y, lado, diagonal_maior, diagonal_menor) {
        this.x = x;
        this.y = y;
        this.lado = lado;
        this.qtd_lados = 4;
        this.diagonal_maior = diagonal_maior;
        this.diagonal_menor = diagonal_menor;
    }

    calcula_area() {
        return (this.diagonal_maior * this.diagonal_menor) / 2;
    }

    calcula_perimetro() {
        return this.lado * this.qtd_lados;
    }
}

class Circulo {
    constructor(x, y, raio) {
        this.x = x;
        this.y = y;
        this.raio = raio;
    }

    calcula_area() {
        return Math.PI * this.raio**2;
    }

    calcula_perimetro() {
        return 2 * Math.PI * this.raio;
    }
}
