"use strict";
// ===> Exemplo 01: Numeric enums
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// ===> Exemplo 02: String enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.groupCollapsed(Dia);
function comida(c) {
    return "Comidas muito apetitosas!";
}
console.log(comida("Pizza" /* Comida.Pizza */));
console.log(comida("Churrasco" /* Comida.Churrasco */));
// console.log(comida(5));
// ===> Exemplo 04: Quando usar enum?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["ToDo"] = 0] = "ToDo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const ConcluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
};
if (ConcluidaTarefa.status === Tarefa.Done) {
    console.log("Enviar email: Tarefa COncluída!");
}
