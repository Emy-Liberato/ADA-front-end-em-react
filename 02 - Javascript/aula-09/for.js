const prompt = require("readline-sync");

//expressão 1: inicialização da variável de controle
//expressão 2: condição de permanencia
//expressão 3: o incremento da variável de controle

// for(expressão 1; expressão 2; expressão 3;) {
//   O escopo do for
// }

//* Loop infinito
// for(;;) {
//   if (tal condição ocorrer, break)
// }

for (let i = 0; i < 5; i += 2) {
  console.log(i);
}

// *limpa o console
console.clear();

// exemplo

/*
let maiorNumero = 0
let numeroInformado;

for (let i = 1; i <= 5; i++) {
  numeroInformado = Number(prompt.question("Informe um número positivo: "))

  if ( numeroInformado > maiorNumero) {
    maiorNumero = numeroInformado
  }
}

console.log("Maior número:", maiorNumero); 
*/

//* exemplo: percorrendo string com for

const nome = "Emilly";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);

  if (i === 2) {
    break;
  }
}

console.clear();

//* ARRAYS

const notasDoAluno = [10, 8, 5];
const pessoa = ["Emilly", 20, 1.6, true];

console.log(notasDoAluno);
console.log(pessoa);

// seleciona apenas um elemento do array
console.log(pessoa[1]);

// muda apenas um elemento, conseguimos alterar um elemento mesmo sendo const
pessoa[3] = false;

// mostra o tamanho do array, ou seja quantos elementos tem
console.log(pessoa.length);

console.clear();

// fatiamento de array
const numeros = [40, 34, 67, 89, 23, 10];

console.log(numeros.slice(0, 2)); // sempre colocar um indice a mais, pois conta o numero que for menor que
console.log(numeros.slice(2));

console.clear();

// adicionando elementos no final do Array
numeros.push(0);
console.log(numeros);

console.clear();

// adiciona elemento no inicio do Array
numeros.unshift(-1);
console.log(numeros);

// pop: remove elemento que esta no final do array
console.clear();
numeros.pop(); // Remove o elemento 0 do final
console.log(numeros);

// shift: remove elemento que esta no começo do array
console.clear;
numeros.shift();
console.log(numeros);

//Será que o elemento 20 existe no array numero?
console.clear();
console.log(numeros.includes(20));
console.log(numeros.includes(10));

if (numeros.includes(20)) {
  console.log("Opa! Existe o número 20 dentro do array numeros!");
} else {
  console.log("Não existe o número 20 no array numeros.");
}

const existeNumero20 = numeros.includes(20);

console.clear();

//* indexOf - procura o primeiro elemento com o mesmo valor
const indiceElemento20 = numeros.indexOf(20);

console.log(indiceElemento20);

//* lastindexOf - procura o ultimo elemneto com o mesmo valor
const indiceElemento40 = numeros.indexOf(40);

console.log(indiceElemento40);

console.clear();

//! percorrer um array com for

const arr = [45, 36, 90, 76, 32, 7];

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

console.clear();

//* for-of - percorre os elementos do array

for (const elemento of arr) {
  console.log(elemento);
}

console.clear();

//* for-in - percorre o index do array

for (const indice in arr) {
  console.log(indice, typeof indice);
  console.log(arr["0"]);
}
