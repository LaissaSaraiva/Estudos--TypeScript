"use strict";
// ===> Exemplo 01: Tipo VOID / funções
function logError(errorMessage) {
    console.log(errorMessage);
}
logError('Required Field - Name!');
// ===> Exemplo 02: funções
const logErrorExample2 = (errorMessage) => {
    console.log(errorMessage);
};
logErrorExample2("Required field - Surname");
// ===> Exemplo 03: Variáveis
let variavelExemploVoid;
// variavelExemploVoid = 1;
// variavelExemploVoid = null;
variavelExemploVoid = undefined;
console.log(variavelExemploVoid);
