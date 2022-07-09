// ===> Exemplo 01: Numeric enums

enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}

console.log(Idioma);

// ===> Exemplo 02: String enums

enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM'
}

console.groupCollapsed(Dia);


// ===> Exemplo 03: Como podemos acessar um valor de Enum com uma chave : (usando const)

const enum Comida {
  Hamburguer = 'Hamburguer',
  Massa = 'Massa',
  Pizza = "Pizza",
  Torta = 'Torta',
  Churrasco = "Churrasco",
}

function comida(c: Comida) {
  return "Comidas muito apetitosas!";
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// console.log(comida(5));



// ===> Exemplo 04: Quando usar enum?

enum Tarefa {
  ToDo,
  Progress,
  Done,
}

const ConcluidaTarefa = {
  id:1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluída com sucesso!',
};

if (ConcluidaTarefa.status === Tarefa.Done) {
  console.log("Enviar email: Tarefa COncluída!");
}