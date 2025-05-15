// Operedores Boleanos: comparação

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2); // compara a apenas o valor
console.log(numero1 === numero2); // compara o valor e o tipo
console.log(numero1 == "10");

console.log(numero1 !== "10"); // compara se o valor é diferente

console.log(numero1 > numero2) // comparação

const idadePessoal1 = 16;
const idadePessoal2 = 39;

console.log(idadePessoal1 >= 18 && idadePessoal2 >= 18); // e
console.log(idadePessoal1 >= 18 || idadePessoal2 >= 18); // ou

console.log(!true); // false

console.log(!(idadePessoal1 >= 18)); // retorna verdadeiro se a pessoa for menor de idade

