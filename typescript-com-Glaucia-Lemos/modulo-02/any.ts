// ===> Exemplo 01: Tipo Any

const a: any = 31;
const b: any = ["Laissa"];
const result = a + b;
console.log(result);

// ===> Exemplo 02: Quando o any é inferido implicitamente!
let frase;
frase = "Oi , pessoal! Tudo bem?";
console.log(frase);

// ===> Exemplo 03: Quando devemos usar o tipo any?
const formulario: { [campoFormulario: string]: any } = {
  nome: 'Laíssa',
  sobrenome: 'Saraiva',
  idade: 31,
};

console.log(formulario);