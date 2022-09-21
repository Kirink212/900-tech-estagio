const button = document.getElementById("tentar");
const word_div = document.getElementById("palavra");
const hint_div = document.getElementById("dica");
const life_div = document.getElementById("vidas");

const array_words = [
    {
        "palavra": "pizza",
        "tema": "comida"
    },
    {
        "palavra": "feijão",
        "tema": "comida"
    },
    {
        "palavra": "ovo",
        "tema": "comida"
    },
    {
        "palavra": "barcelona",
        "tema": "futebol"
    },
    {
        "palavra": "caneta",
        "tema": "objeto"
    },
    {
        "palavra": "lápis de cor",
        "tema": "objeto"
    }
];
const random_index = Math.floor(Math.random()*array_words.length);
const random_word = array_words[random_index];
const normalized_word = random_word.palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const final_word = normalized_word.toUpperCase();
const used_letters = [];
let vidas = 6;

let word_to_show = "";
for (let letra of final_word) {
    if (letra != ' ' && letra != '-') {
        word_to_show += "_"
    } else {
        word_to_show += letra;
    }
}

word_div.innerHTML += word_to_show;
hint_div.innerHTML += "Dica: " + random_word["tema"];
life_div.innerHTML += `Vidas Restantes: ${vidas}`;

button.addEventListener('click', () => {
    const input = document.getElementById("tentativa");
    const value = input.value.toUpperCase();
    const number = parseInt(value);

    // Caso seja numérico
    if (!isNaN(number)) {
        alert("Valor inválido! Somente letras ou palavras são permitidas. Digite novamente!");
    } else { // Caso seja string
        // let array = value.split("");
        // array = array.filter((letra) => letra >= 'A' && letra <= 'Z')
        // console.log(array.join(""));
        
        const valueNoSpecial = value.replace(/[^\w\s]/gi, '');
        console.log(valueNoSpecial);

        if (valueNoSpecial.length > 1) {
            // caso em que o jogador chutou uma palavra
            if (valueNoSpecial == final_word) {
                // Ganhou!
                if (confirm("Parabéns, você ganhou!\nDeseja jogar novamente?")) {
                    location.reload()
                }
            } else {
                // Perdeu!
                if (confirm("Que pena, você perdeu...\nDeseja jogar novamente?")) {
                    location.reload()
                }
            }
        } else {
            // verificar se a letra pertence à palavra
            if (used_letters.includes(valueNoSpecial)) {
                alert("Letra já utilizada! Tente outra vez.");
                return;
            }

            used_letters.push(valueNoSpecial);

            if(final_word.includes(valueNoSpecial)) {
                word_to_show = word_to_show.split("");
                for (let i = 0; i < word_to_show.length; i++) {
                    // Caso a letra atual da palavra seja igual à letra digitada pelo usuário
                    if (final_word[i] == valueNoSpecial) {
                        word_to_show[i] = valueNoSpecial;
                    }
                }
                word_to_show = word_to_show.join("");
            } else {
                vidas--;

                alert("Esta letra não pertence à palavra. Tente outra vez!");
            }

            word_div.innerHTML = word_to_show;
            life_div.innerHTML = `Vidas Restantes: ${vidas}`;

            if (vidas <= 0) {
                // Perdeu!
                if (confirm("Que pena, você perdeu...\nDeseja jogar novamente?")) {
                    location.reload();
                }
            }

            if (word_to_show == final_word) {
                // Ganhou!
                if (confirm("Parabéns, você ganhou!\nDeseja jogar novamente?")) {
                    location.reload();
                }
            }            
        }
    }
});