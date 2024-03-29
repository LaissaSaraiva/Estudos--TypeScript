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

function onboarding01(funcionario: { nome: string }) {
  return "Seja bem-vindo!" + funcionario.nome;
}

console.log(onboarding01({ nome: "Laíssa Saraiva" }));

// Exemplo 03 == > object nomeados

interface Pessoa {
  nome: string; // propriedades da interface
  funcao: string;
}
function onboarding02(pessoa: Pessoa) {
  return `Seja bem vinda ${pessoa.nome} ! Sua função aqui na empresa será ${pessoa.funcao}`;
}
console.log(onboarding02({ nome: "Laissa", funcao: "Software Developer" }));

// Exemplo 04 == > object como Type Alias

type Pessoa03 = {
  nome: string;
  funcao: string;
  linguagem: string;
};

function onboarding03(pessoa: Pessoa03) {
  return `Seja bem vinda ${pessoa.nome} ! Sua função aqui na empresa será ${pessoa.funcao} . Você trabalhará com a lingaguagem ${pessoa.linguagem}`;
}
console.log(
  onboarding03({
    nome: "Laissa",
    funcao: "Software Developer",
    linguagem: "JavaScript/ TypeScript",
  })
);

// Exemplo 05 == >Usando optional no object

interface Pessoa04 {
  nome: string; // propriedades da interface
  funcao: string;
  linguagem: string;
  email?: string; // propriedade opcional / não obrigatoria
}

function onboarding04(pessoa: Pessoa04) {
  return `Seja bem vinda ${pessoa.nome} ! Sua função aqui na empresa será ${pessoa.funcao} . Você trabalhará com a lingaguagem ${pessoa.linguagem} e seu email de acesso será ${pessoa.email}`;
}
console.log(
  onboarding04({
    nome: "Laissa",
    funcao: "Software Developer",
    linguagem: "JavaScript/ TypeScript",
    email: "laissa_saraiva@hotmail.com",
  })
);


// Exemplo 06 == > Propriedade 'readonly' ( caso deseje que devs não modifiquem um determinado objeto use o 'readonly')

interface Pessoa05 {
  nome: string; // propriedades da interface
  funcao: string;
  linguagem: string;
  readonly email: string; // propriedade readonly / no tempo de execução 
}

function onboarding05(pessoa: Pessoa05) {
  return `Seja bem vinda ${pessoa.nome}!
  Sua função aqui na empresa será ${pessoa.funcao}.
  Você trabalhará com a lingaguagem ${pessoa.linguagem} e seu email de acesso será ${pessoa.email}`;
}
console.log(
  onboarding05({
    nome: "Laissa",
    funcao: "Software Developer",
    linguagem: "JavaScript/ TypeScript",
    email: "laissasc@teste.com",
  })
);


// Exemplo 06 == > Tipos de extensões (heranças)

interface Mae {
  nome: string;
}

interface Pai {
  sobrenome: string;
}

interface Filha extends Mae , Pai {
idade: number;
}

const filha: Filha = {
  nome: 'Laíssa',
  sobrenome:  "Cunha",
  idade: 31,
}

console.log(filha);


// Exemplo 08 ==> Tipos de Interseções

interface Cachorro {
  raca: string;
}

interface Gato {
  raca: string;
}

type Animal = Cachorro & Gato;


// Exemplo 09 ==> Generic Objects <T> - vai aceitar todas as infos de usuario e de admin

type Usuario = {
  nome: string;
  email: string;
}

type Admin = {
  nome: string;
  email: string;
  admin: true;
}

const usuario: Usuario = {
  nome: 'Laíssa',
  email: 'laissasc@teste.com'
}

const admin: Admin = {
  nome: 'Laíssa',
  email: 'laissasc@teste.com',
  admin: true,
}

function acessarSistema<T>(usuario: T): T {
  return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

// function acessarSistema( usuario: Usuario): Usuario {
//   return usuario;
// }
// console.log(acessarSistema(usuario));