// ===> Exemplo 01: Tipo VOID / funções

function logError(errorMessage: string): void {
  console.log(errorMessage);
}

logError('Required Field - Name!');


// ===> Exemplo 02: funções

const logErrorExample2 = (errorMessage: string) : void => {
  console.log(errorMessage);
}
logErrorExample2("Required field - Surname");


// ===> Exemplo 03: Variáveis

let variavelExemploVoid: void;
// variavelExemploVoid = 1;
// variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);