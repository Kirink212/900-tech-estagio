// Condicionais

// Exemplo: Faça um programa que calcule o IMC com base 
// na altura e no peso do usuário. O IMC deve ser calculado
// através de uma função.

function calcula_imc(peso, altura) {
    let imc = peso/altura**2;
    return imc;

    // return peso/altura**2; -> outra forma de implementar a minha função
}

// Resolução para um único usuário

function resolucao_para_um_usuario() {
    let altura = parseFloat(prompt("Digite a sua altura:"));
    let peso = parseFloat(prompt("Digite o seu peso:"));

    const imc = calcula_imc(peso, altura);

    console.log("O seu IMC é:", imc);
}

// resolucao_para_um_usuario();

// Implemente as categorias com base no IMC:

// Tipos de operações para comparação:
// == -> igual a
// != -> diferente de
// > -> maior que
// >= -> maior ou igual que
// < -> menor que
// <= -> menor ou igual que

// Caso simplificado:
// if (imc < 25) {
//     console.log("O seu peso é normal");
// } else { // imc >= 25
//     console.log("Você está acima do peso...");
// }

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

// console.log(descobre_categoria(24))

// Estruturas de repetição

function repeticao_determinada() {
    let total_usuarios = parseInt(prompt("Digite o total de usuários:"));
    let cont = 0; // inicialização

    // console.log(cont++); // resultado é 0
    // console.log(++cont); // resultado é 2

    // while(cont++ < total_usuarios) {
    while(cont < total_usuarios) { // comparação
        let altura = parseFloat(prompt("Digite a sua altura:"));
        let peso = parseFloat(prompt("Digite o seu peso:"));

        const imc = calcula_imc(peso, altura);

        console.log("O seu IMC é:", imc);

        console.log(descobre_categoria(imc));

        // cont += 1 ou cont = cont + 1
        cont++; // atualização
    }
}

// repeticao_determinada();

function repeticao_indeterminada_com_while() {
    while(confirm("Deseja calcular o seu IMC?")) {
        let altura = parseFloat(prompt("Digite a sua altura:"));
        let peso = parseFloat(prompt("Digite o seu peso:"));
    
        const imc = calcula_imc(peso, altura);
    
        console.log("O seu IMC é:", imc);
    
        console.log(descobre_categoria(imc));
    }
}

function repeticao_indeterminada_com_dowhile() {
    do {
        let altura = parseFloat(prompt("Digite a sua altura:"));
        let peso = parseFloat(prompt("Digite o seu peso:"));

        const imc = calcula_imc(peso, altura);

        console.log("O seu IMC é:", imc);

        console.log(descobre_categoria(imc));
    } while(confirm("Deseja continuar executando o programa?"))
}

// O meu programa também deve parar caso eu encontre
// mais de duas pessoas com Obesidade classe III

function resolucao_com_and() {
    let cont = 0;
    while(cont < 3 && confirm("Deseja calcular o seu IMC?")) {
        let altura = parseFloat(prompt("Digite a sua altura:"));
        let peso = parseFloat(prompt("Digite o seu peso:"));

        const imc = calcula_imc(peso, altura);

        console.log("O seu IMC é:", imc);

        let cat = descobre_categoria(imc);

        console.log(cat);

        if (cat == "Obesidade classe III") {
            cont++;
        }
    }
}

// resolucao_com_and();

function resolucao_com_break() {
    let cont = 0;
    while(confirm("Deseja calcular o seu IMC?")) {
        let altura = parseFloat(prompt("Digite a sua altura:"));
        let peso = parseFloat(prompt("Digite o seu peso:"));

        const imc = calcula_imc(peso, altura);

        console.log("O seu IMC é:", imc);

        let cat = descobre_categoria(imc);

        console.log(cat);

        if (cat == "Obesidade classe III") {
            cont++;
        }

        if (cont > 2)
            break;
    }
}

// resolucao_com_break();

function repeticao_determinada_com_for() {
    for (let cont = 0; cont < 3; cont++) {
        let altura = parseFloat(prompt("Digite a sua altura:"));
        let peso = parseFloat(prompt("Digite o seu peso:"));

        const imc = calcula_imc(peso, altura);

        console.log("O seu IMC é:", imc);

        console.log(descobre_categoria(imc));
    }
}

// repeticao_determinada_com_for();

function repeticao_determinada_com_for_continue() {
    // for (let cont = 2; cont < 5; cont++) {
    for (let cont = 0; cont < 5; cont++) {
        if (cont < 2) {
            console.log("Pulei");
            continue;
        }

        let altura = parseFloat(prompt("Digite a sua altura:"));
        let peso = parseFloat(prompt("Digite o seu peso:"));

        const imc = calcula_imc(peso, altura);

        console.log("O seu IMC é:", imc);

        console.log(descobre_categoria(imc));
    }
}

repeticao_determinada_com_for_continue();