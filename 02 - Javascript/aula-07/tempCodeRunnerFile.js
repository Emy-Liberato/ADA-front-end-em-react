const mediaDoAluno = 4;

// Media >= 7 => Aprovado
// Media < 7 e media >= 5 => Prova final
// Media < 5 => Reprovado

if (mediaDoAluno >= 7) {
  console.log("Aprovado");
} else if (mediaDoAluno >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}