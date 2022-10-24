class No {
    constructor(numero) {
        this.info = numero;
        this.prox = undefined;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = undefined;
        this.total_elementos = 0;
    }

    inserir(numero) {
        const novo = new No(numero);

        novo.prox = this.cabeca;
        this.cabeca = novo;
        this.total_elementos++;
    }

    mostra() {
        let no_aux = this.cabeca; // inicialização
        let string = "";
        while(no_aux != undefined) { // comparação
            string += ` ${no_aux.info} ->`;
            no_aux = no_aux.prox; // atualização
        }
        string += " NULL";
        console.log(string);
    }

    remover(numero) {
        let no_aux;
        let no_ant = undefined;
        for (no_aux = this.cabeca; no_aux != undefined; no_aux = no_aux.prox) {
            if (no_aux.info == numero) {
                break;
            }
            no_ant = no_aux;
        }

        // Caso o número não exista
        if (no_aux == undefined) {
            console.error("O número solicitado não existe na Lista!");
            return;
        }

        // Caso o número seja o primeiro da lista
        if (no_ant == undefined) {
            this.cabeca = no_aux.prox;
            return no_aux;
        }

        // Caso o número seja do meio pro final da lista
        no_ant.prox = no_aux.prox;
        return no_aux;
    }
}

const lista = new ListaEncadeada();
lista.mostra();
lista.inserir(6);

lista.mostra();
lista.inserir(9);
lista.mostra();
lista.inserir(8);
lista.mostra();
lista.inserir(7);
lista.mostra();
lista.inserir(10);

lista.mostra();

let removido = lista.remover(10);
console.log(`O nó removido foi: ${removido.info}`);
lista.mostra();

lista.remover(15);
lista.mostra();

removido = lista.remover(9);
console.log(`O nó removido foi: ${removido.info}`);
lista.mostra();