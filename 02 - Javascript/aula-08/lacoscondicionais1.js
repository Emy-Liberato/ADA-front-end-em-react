const prompt = require("readline-sync");

// let saldo = Number(prompt.question("Qual eh o seu saldo?"));

// while (saldo < 0) {
//   console.log("Dentto do while...");
// }

// console.log(saldo);

//* exemplo 2
// let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "))

// let somaDasNotas = 0; // acumulador
// let qtdNotaValidas = 0 // acumulador com a quantida dr notas digitadas

// while (notaDoAluno > 0) {
//   somaDasNotas += notaDoAluno
//   qtdNotaValidas ++
//   notaDoAluno =  Number(prompt.question("Informe a proxima nota: ")) // incrementando o acumulador (somaDasNotas)

// }

// console.log("Media das notas dos alunos =", somaDasNotas / qtdNotaValidas);

//* exemplo 3

// Math.random() => entre 0 e 1
// const numeroAleatorio = parseInt(Math.random() * 10); // 0.46789 * 10 = 4

// let numeroDoUsuario = Number(
//   prompt.question("Informe um número entre 0 e 10: ")
// );

// console.log(numeroAleatorio);

// while (numeroAleatorio !== numeroDoUsuario) {
//   console.log("Você errou o número! Tente novamente...");
//   numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "));
// }

// console.log("Parabéns! Você acertou! O número era", numeroAleatorio);

//* loop com contador

let contador = 0;

// while (contador < 5) {
//   console.log(contador);
//   contador++;

//   if (contador === 2) {
//     continue; // força o código a voltar
//   }

//   console.log("Depois do if...");
// }

//* DO-WHILE

let saldo;
// undefined

do {
  saldo = Number(prompt.question("Informe um saldo válido: "));
} while (saldo < 0);

console.log(saldo);
