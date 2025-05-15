const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual eh a sua idade?"));

// const ehMaiorDeIdade = idade >= 18;

// estrutura condicionais if/else

if (idade >= 18) {
  console.log("Você eh maior de idade");
} else {
  console.log("Você eh menor de idade");
}

const mediaDoAluno = 4;

// Media >= 7 => Aprovado
// Media < 7 e media >= 5 => Prova final
// Media < 5 => Reprovado

if (mediaDoAluno >= 7) {
  console.log("Aprovado");
  console.log("Parabens! 😀👍");
} else if (mediaDoAluno >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}

// 1. Preciso ser maior de idade
// 2. preciso ter um CHN

const idadeDaPessoa = 18;
const temCNH = true;

if (idadeDaPessoa >= 18 && temCNH) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você NÃO pode dirigir!");
}