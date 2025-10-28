"use strict";
let numero = 20; // inferência de tipo
const pi = 3.1415; // uma variavel constante o tipo dela é sempre o valor dela, porque nao pode ser alterado
let nome = "Emilly";
let correta;
let resultado = numero * pi;
// number[] or Array<number>
const numeros = [1, 2, 3, 4, 5];
// ! const misto: any[] = ["Emilly", 21, 1.60]
// ! Evite ao máximo utilizar o any
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idade) => idade < 18);
const pessoaTupla = ["Emilly", 21]; //sempre terá duas posições, assim podemos colocar a tipagem na ordem que vão aparecer
const pessoa = {
    nome: "Emilly",
    idade: 21,
    altura: 1.6,
};
pessoa.profissao = "Desenvolvedora";
console.log(pessoa);
function choseNumber(numero1, numero2, criterio // sempre colocar os parametro opcionais por ultimo
) {
    // tipando o retorno da função
    switch (criterio) {
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = choseNumber(10, 20, "greater");
console.log("Numero escolhido:", numeroEscolhido);
function somar(num1, num2) {
    // quando a função nao retorna uma valor, podemos colocar "void"
    return num1 + num2;
}
const pessoas = {
    '123.456.789-00': {
        nome: "Fulano",
        idade: 20,
        altura: 1.80,
    },
    "123.456.789-01": {
        nome: "Fulana",
        idade: 19,
        altura: 1.73,
    }
};
