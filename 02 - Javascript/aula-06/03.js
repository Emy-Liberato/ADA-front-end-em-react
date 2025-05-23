const prompt = require("readline-sync");

let idade = prompt.question("Qual eh a sua idade?");

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

// Coeção Explícita (Converção manual)

console.log(Number("x")); // retorna NaN

console.log(String(10, typeof String(10)));

console.log(Boolean(2)); // false em bolenano é apenas 0

// Coerção Implícita
console.log(1 + "1");
console.log("10" + 5); // cocatenação
console.log(10 - "5"); // se for qualquer opereção que nao seja +, a strings transforma e número

// Qual será a saída desse código?
let n = 1 + "1"; // "11" (string)
n = n - 1; // 11 - 1 = 10

console.log(n);

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5"); // 5 + 4 + '5' = 9 + '5' = '95'

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4); // '52' + 3 + 4 = '523' + 4 = '5234'

// Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5"); // 6 - '3' - 2 + '5' = 3 - 2 + '5' = 1 + '5' = '15'
