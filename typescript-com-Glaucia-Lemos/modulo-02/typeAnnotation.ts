/*O type Annotation
Auxilia para evitar erros constantes relacionados as tipagens das variaveis.*/

// ==> Variáveis [Type Annotations]

let nome: string = "Laíssa Saraiva";
console.log(nome);

// Arrays [Type Annotations]

let animals: string[] = ["Elefante", "Cachorro", "Panda", "Girafa", "Gato"];
console.log(animals);

// Objeto [Type Annotations]

let carro: {
  nome: string;
  ano: number;
  preco: number;
};

carro = { nome: "Toyota", ano: 2019, preco: 80000 };
console.log(carro);


//Função [Type Annotations]

function multiplicarNumeros(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicarNumeros(2, 6));
