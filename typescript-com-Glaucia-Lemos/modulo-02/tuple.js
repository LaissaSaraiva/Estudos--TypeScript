"use strict";
// ===> Exemplo 01: Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ["Laissa", "Frontend Developer", 31];
console.log(pessoa);
// ===> Exemplo 02: Acessndo o valor da Tupla
let person;
person = ["Laissa", "Frontend Developer", 31];
console.log(person[1]);
// ===> Exemplo 03: Outra forma de usr Tuplas en TypeScript (com labels)
let pessoa2 = [
    "Laissa",
    "Frontend Developer",
    31,
];
console.log(pessoa2);
// ===> Exemplo 04: Usando Tuplas com SPread Operator
// ...string= spread operator - significa que os itens da lista são string
let listaFrutas = [
    "Abacaxi",
    "Laranja",
    "Maça",
    "Melancia",
    "Manga",
];
console.log(...listaFrutas);
// ===> Exemplo 05: Lista Heterogênea de Tupla:
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// ===> Exemplo 06: uso de funções com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(["Laissa", "Lucas"], [31, 26]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa("Laissa", "Saraiva"));
console.log(criarPessoa("Laissa", "Saraiva", "Cunha"));
