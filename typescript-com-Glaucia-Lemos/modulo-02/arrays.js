"use strict";
// Arrays e Matrizes
// ===> Exemplo 01: Uso de Colchetes
let frutas = ["Abacaxi", "Laranja", "Maça", "Melancia", "Manga"];
console.log(frutas[2]); //Maça
let numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeral[5]);
// ===> Exemplo 02: Array Objct (Objeto Array)
let frutas1 = [
    "Abacaxi",
    "Laranja",
    "Maça",
    "Melancia",
    "Manga",
];
console.log(frutas[3]); //Melancia
let numeral1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeral[6]);
// ===> Exemplo 03: Adicionando mais string com método 'push'
let idiomas = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas);
idiomas.push("Mandarim");
console.log(idiomas);
idiomas.push("Italiano");
console.log(idiomas);
// ===> Exemplo 04: Identifica o tamanho do array - método - 'length'
let idiomas1 = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas1.length);
// ===> Exemplo 05: Exemplo de Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// ===> Exemplo 06:  Exemplo de Array com laços de iteração
let linguagensArray = new Array("JavaScript", "Python", "PHP", "C#");
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
