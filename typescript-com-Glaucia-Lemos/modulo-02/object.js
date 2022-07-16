"use strict";
// Exemplo 01 == > Exemplo básico do uso do Tipo Object
//Agrupamento de Dados
const pessoa1 = {
    nome: "Laíssa",
    sobrenome: "Saraiva",
    idade: "31",
    funcao: "Software Developer",
};
console.log(pessoa1);
// Exemplo 02 == > object com parametros de função (podem ser anonimas)
function onboarding01(funcionario) {
    return "Seja bem-vindo!" + funcionario.nome;
}
console.log(onboarding01({ nome: "Laíssa Saraiva" }));
function onboarding02(pessoa) {
    return `Seja bem vinda ${pessoa.nome} ! Sua função aqui na empresa será ${pessoa.funcao}`;
}
console.log(onboarding02({ nome: "Laissa", funcao: "Software Developer" }));
function onboarding03(pessoa) {
    return `Seja bem vinda ${pessoa.nome} ! Sua função aqui na empresa será ${pessoa.funcao} . Você trabalhará com a lingaguagem ${pessoa.linguagem}`;
}
console.log(onboarding03({
    nome: "Laissa",
    funcao: "Software Developer",
    linguagem: "JavaScript/ TypeScript",
}));
function onboarding04(pessoa) {
    return `Seja bem vinda ${pessoa.nome} ! Sua função aqui na empresa será ${pessoa.funcao} . Você trabalhará com a lingaguagem ${pessoa.linguagem} e seu email de acesso será ${pessoa.email}`;
}
console.log(onboarding04({
    nome: "Laissa",
    funcao: "Software Developer",
    linguagem: "JavaScript/ TypeScript",
    email: "laissa_saraiva@hotmail.com",
}));
