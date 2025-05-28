// Array.prototype.every(): verificar se todos os elementos de um array seguem uma determinada condição retornada pela função

const numeros = [40, 34, 67, 89, 23, 16, 10];

const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 34,
    altura: 1.77,
  },
  {
    nome: "Pessoa 2",
    idade: 25,
    altura: 1.56,
  },
  {
    nome: "Pessoa3",
    idade: 46,
    altura: 1.82,
  },
];


const todosPositivos = numeros.every((elemento) => elemento > 30)

console.log(todosPositivos);

const todosMaioresDeIdade = pessoas.every((pessoas) => pessoas.idade > 18 && pessoas.altura >= 1.7);

console.log(todosMaioresDeIdade);

// Array.prototype.some(): verificar se algum elemento do array torna verdadeira uam determinada condição retornada pela função

console.clear();

const numeros2 = [-1, 3, 7, -3, 5]

const retorno = numeros2.some((numero) => numero > 0)

console.log(retorno);


