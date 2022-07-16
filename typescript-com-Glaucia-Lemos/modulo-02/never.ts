// Exemplos 01 ==> NEVER Throw Exception

function error(message: string): never {
  throw new Error(message);

  console.log(error('Erro de Mensagem 01'));

}
// Exemplos 02 ==> NEVER Throw Exception

function reject(){
  return error("Erro de Mesagem 02");

console.log(reject());
}


// Exemplos 03 ==> Função que contém loop infinito retorna o tipo 'never'


// Exemplos 04 ==> Diferenças entre 'never' ou 'void'

// const algumaCoisaVoid: void = null;
// const algumaCoisaNever: never = null;