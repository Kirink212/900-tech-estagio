// Continuando a parte de condicionais...

function calcula_imc(peso, altura) {
    let imc = peso/altura**2;
    return imc;
}

function descobre_categoria(imc) {
    if (imc < 16.5)
        return "Peso severamente abaixo do normal";
    else if (imc < 18.5)
        return "Peso abaixo do normal";
    else if (imc < 25)
        return "Peso normal";
    else if (imc < 30)
        return "Sobrepeso";
    else if (imc < 35)
        return "Obesidade classe I";
    else if (imc < 40)
        return "Obesidade classe II";
    else
        return "Obesidade classe III";
}

// Categorizando
function encontra_limite_faixa(categoria) {
    // Peso normal
    // Sobrepeso
    // Obesidade
    // Categoria Inválida
    if (categoria == "Peso normal")
        console.log("IMC de 18.5 à 25");
    else if (categoria == "Sobrepeso")
        console.log("IMC de 25 à 30");
    else if (categoria == "Obesidade")
        console.log("IMC igual ou superior a 30");
    else
        console.log("Categoria inválida!");
}

// encontra_limite_faixa("Sobrepeso");

function encontra_limite_faixa_switch_case(categoria) {
    switch(categoria) {
        case "Peso normal":
            console.log("IMC de 18.5 à 25");
            break;
        case "Sobrepeso":
            console.log("IMC de 25 à 30");
            break;
        case "Obesidade":
            console.log("IMC igual ou superior a 30");
            break;
        default:
            console.log("Categoria inválida!");
            break;
    }
}

// encontra_limite_faixa_switch_case("Sobrepeso");

function encontra_limite_faixa_switch_case_return(categoria) {
    switch(categoria) {
        case "Peso normal":
            return "IMC de 18.5 à 25";
        case "Sobrepeso":
            return "IMC de 25 à 30";
        case "Obesidade":
            return "IMC igual ou superior a 30";
        default:
            return "Categoria inválida!";
    }
}

// console.log(encontra_limite_faixa_switch_case_return("Sobrepeso"));

// If ternário, e mudando de contexto...
// let ano_nasc = prompt("Digite o seu ano de nascimento");
// let geracao;

// if (ano_nasc > 2000) {
//     geracao = "Z";
// } else {
//     geracao = "Millenial";
// }

// let geracao = ano_nasc > 2000? "Z" : "Millenial";
// console.log("Geração", geracao);

// Função com parâmetros opcionais
function cadastrar_aluno(nome, cpf, total_xp = 0, total_vidas = 3) {
    // truthy, falsy - quando um valor de uma variável se comporto como "true" ou "false" em uma condição
    // total_xp = total_xp? total_xp : 0;
    // total_vidas = total_vidas? total_vidas : 3;

    // console.log("O nome do aluno é", nome, "e seu CPF é", cpf, "\nTotal de XP =", total_xp, "\nTotal de Vidas =", total_vidas);
    console.log(`O nome do aluno é ${nome}, e seu CPF é ${cpf}\nTotal de XP = ${total_xp}\nTotal de Vidas = ${total_vidas}`); // string literal
}

// cadastrar_aluno("Luís Fernando", "12312312", 300);

function testando_valores_truthy_falsy() {
    console.log(undefined? true : false); // falsy
    console.log(null? true : false); // falsy
    console.log(1? true : false); // truthy
    console.log(2? true : false); // truthy
    console.log(0? true : false); // falsy
    console.log("Olá, tudo bem?"? true : false); // truthy
    console.log(""? true : false); // falsy
    console.log([]? true : false); // truthy
}

// testando_valores_truthy_falsy()

// Arrays - Primeira estrutura de dados

let array_notas = [4, 6.7, 3.8, 9.1, 7.8, 0.9, 8];
console.log(array_notas);
console.log(array_notas.length);

// Acessando as notas
// console.log("Acessando o valor contido na quarta posição:", array_notas[3]);
// console.log("Acessando o valor contido na sexta posição:", array_notas[5]);
// console.log("Acessando o valor contido na última posição:", array_notas[array_notas.length - 1]);

// for "let i"
for (let i = 0; i < array_notas.length; i++) {
    console.log(`Acessando o valor contido na ${i+1}ª posição: ${array_notas[i]}`);
}
// console.log(i); -> "Uncaught ReferenceError: i is not defined"

// for..of - Itera sobre os valores
let i = 0;
for (let nota of array_notas) {
    console.log(`Acessando o valor contido na ${i+1}ª posição: ${nota}`);
    i++;
}

// for..in - Itera sobre os índices
for (let i in array_notas) {
    console.log(`Acessando o valor contido na ${parseInt(i)+1}ª posição: ${array_notas[i]}`);
}

// Tirando a média das notas
let soma = 0;
for (let nota of array_notas) {
    soma += nota;
}
console.log(`A média da turma é ${(soma/array_notas.length).toFixed(2)}`);

// Encotrando a menor nota
let menor = array_notas[0];
for (let i=1; i<array_notas.length; i++) {
    if (array_notas[i] < menor) {
        menor = array_notas[i];
    }
}
console.log(`A menor nota da turma é ${menor}`);

// Encotrando a maior nota
let maior = array_notas[0];
for (let i=1; i<array_notas.length; i++) {
    if (array_notas[i] > maior) {
        maior = array_notas[i];
    }
}
console.log(`A maior nota da turma é ${maior}`);

// Atualizando a nota
array_notas[5] = 1.5;
console.log(array_notas);

// Removendo uma nota
console.log("Pop só remove o último elemento, olha só:", array_notas.pop());
console.log(array_notas);

console.log("Já o splice remove quem você desejar:", array_notas.splice(2, 2, 7.2, 3.6));
console.log(array_notas);

console.log("Já o shift remove o primeiro elemento, olha só:", array_notas.shift());
console.log(array_notas);

// Inserir novos valores (em um array vazio)

let array_imc = [];
for (let cont = 0; cont < 3; cont++) {
    let altura = parseFloat(prompt("Digite a sua altura:"));
    let peso = parseFloat(prompt("Digite o seu peso:"));

    const imc = calcula_imc(peso, altura);

    array_imc.push(parseFloat(imc.toFixed(2)));
    // array_imc.unshift(parseFloat(imc.toFixed(2)));

    console.log("O seu IMC é:", imc);

    console.log(descobre_categoria(imc));
}

console.log(array_imc);