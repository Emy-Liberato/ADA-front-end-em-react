function saudacao(nomeDoEstudante, curso = "Front-end em React") {
  //Templete string || templete literals
  return `Olá, ${nomeDoEstudante}! Seja bem-vindo(a) ao curso ${curso}`;
}

const mensagemDaSaudacao = saudacao("Emilly", "Back-end em Node.js"); // chamada da função saudação

console.log(mensagemDaSaudacao);
console.clear();

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado / 10);
console.clear();

//-----------------------------------------------
// FUNÇÕES ANÔNIMAS

const dobroDoNumero = function (numero) {
  return numero * 2;
};

const dobro = dobroDoNumero(2);
console.log(dobro);

//-----------------------------------------------
// ARROW FUNCTION: função seta

const suntrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 - numero2;
// quando não usamos a chave, ela já retornar automaticamente
// só é possível fazer uma "ação", mais que isso o ideal é usar {}

const triploDoNumero = (numero) => numero * 3;
