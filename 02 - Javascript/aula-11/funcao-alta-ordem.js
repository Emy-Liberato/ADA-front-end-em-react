// HIGH ORDER FUNCTIONS

//* 1. Função que retorna outra função como parametro

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá, ${studentName}! Seja bem-vindo(a) ao curso de ${courseName}`
    );
  };
}

const displaywelcomeToFrontEndCourse = welcome("Front-end em React");
const displaywelcomeToBackEndCourse = welcome("Bakc-end em Node.js");

displaywelcomeToFrontEndCourse("Emilly Liberato");

//* 2. Função que recebe outra função como parametro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// operacao: função que realiza a operação entre os dois números
// ou seja, ela precisa ser uma função que receba dois números
const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);

// calcular = (10, 5, somar) => somar(10, 5);
const retorno = calcular(10, 5, somar);

console.log(retorno);

// o calculo que quero é: (num1 + num2) + (2 * num1 + num2) 

const resultado = calcular(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2)

console.log(resultado);
