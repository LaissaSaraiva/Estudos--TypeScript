// ===> Exemplo 01: Uso simples de Tuplas em TypeScript
let pessoa: [string, string, number];
pessoa = ["Laissa", "Frontend Developer", 31];

console.log(pessoa);

// ===> Exemplo 02: Acessndo o valor da Tupla
let person: [string, string, number];
person = ["Laissa", "Frontend Developer", 31];

console.log(person[1]);

// ===> Exemplo 03: Outra forma de usr Tuplas en TypeScript (com labels)
let pessoa2: [nome: string, profissao: string, idade: number] = [
  "Laissa",
  "Frontend Developer",
  31,
];
console.log(pessoa2);

// ===> Exemplo 04: Usando Tuplas com SPread Operator
// ...string= spread operator - significa que os itens da lista são string
let listaFrutas: [string, ...string[]] = [
  "Abacaxi",
  "Laranja",
  "Maça",
  "Melancia",
  "Manga",
];
console.log(...listaFrutas);

// ===> Exemplo 05: Lista Heterogênea de Tupla:
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// ===> Exemplo 06: uso de funções com Tuplas

function listarPessoas(nomes: string[], idades: number[]) {
  return [...nomes, ...idades];
}
let resultado = listarPessoas(["Laissa", "Lucas"], [31, 26]);
console.log(resultado);

// ===> Exemplo 07: labeled tuples com spread Operator numa função

type Nome =
  | [primeiroNome: string, sobrenome: string]
  | [primeiroNome: string, nomeMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome) {
  return [...nome];
}

console.log(criarPessoa("Laissa", "Saraiva"));
console.log(criarPessoa("Laissa", "Saraiva", "Cunha"));
