const pessoas = [
  { nome: "Ana", peso: 60, altura: 1.65 },
  { nome: "Bruno", peso: 82, altura: 1.8 },
  { nome: "Carla", peso: 55, altura: 1.6 },
  { nome: "Diego", peso: 90, altura: 1.75 },
];

const calculandoIMC = pessoas.map((pessoa) => {
  const imc = (pessoa.peso / (pessoa.altura ** 2)).toFixed(2);
  classificacao = ''

   if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 40) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  return {
    ...pessoa,
    imc: parseFloat(imc),
    classificacao: classificacao,
  }
});

console.log(calculandoIMC);
