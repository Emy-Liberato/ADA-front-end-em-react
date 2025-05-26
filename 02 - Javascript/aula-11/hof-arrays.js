//! FUNÇÃO DE ALTA ORDEM COM ARRAY

//* 1. Array.prototype.fotEach() - passa por cada elemento do array

const numeros = [40, 34, 67, 89, 23, 16, 10];

// primeiro parametro = o que percorre o array
// segundo parametro = index
// terceiro parametro = array completo
numeros.forEach((elemento, index, arrayCompleto) => {
  console.log(index, elemento, arrayCompleto);
});

console.clear();

//* 2. Array.prototype.find() - últi para encontrar um elemento dentro do array

const encotrado = numeros.find((numero) => {
  return numero < 20 && numero > 10;
});

console.log(encotrado);

// array de objetos
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

const pessoaEncotrada = pessoas.find(
  (pessoas) => pessoas.idade > 20 && pessoas.altura < 1.7
);
console.clear();

console.log(pessoaEncotrada);

//* 3. Array.prototype.findIndex() - muito parecido com o find(), porém retorna o indice do elemento

const indiceDaPessoaEncotrada = pessoas.findIndex(
  (pessoas) => pessoas.idade > 50 && pessoas.altura < 1.7
);
console.clear();

console.log(indiceDaPessoaEncotrada);
