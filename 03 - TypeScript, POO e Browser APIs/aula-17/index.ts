let numero = 20; // inferência de tipo

const pi = 3.1415; // uma variavel constante o tipo dela é sempre o valor dela, porque nao pode ser alterado

let nome: string = "Emilly";

let correta: boolean;

let resultado = numero * pi;

// number[] or Array<number>
const numeros: Array<number> = [1, 2, 3, 4, 5];

// ! const misto: any[] = ["Emilly", 21, 1.60]
// ! Evite ao máximo utilizar o any

const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menoresDeIdade = idades.filter((idade) => idade < 18);

const pessoaTupla: [string, number] = ["Emilly", 21]; //sempre terá duas posições, assim podemos colocar a tipagem na ordem que vão aparecer

// Object Types

// interface
// Tipo custumizavel
// interface Person {
//   nome: string;
//   idade: number;
//   profissao?: string; // o "?" significa que esse paramentro é opcional
//   altura: number;
// }

type Person = {
  nome: string;
  idade: number;
  altura: number;
  profissao?: string;
};

// type
type MyString = string;

const pessoa: Person = {
  nome: "Emilly",
  idade: 21,
  altura: 1.6,
};

pessoa.profissao = "Desenvolvedora";

console.log(pessoa);

// type aliases - dar "apelido para o critério"
type Criterio = "greater" | "lower";

function choseNumber(
  numero1: number,
  numero2: number,
  criterio?: Criterio // sempre colocar os parametro opcionais por ultimo
): number {
  // tipando o retorno da função
  switch (criterio) {
    case "greater":
      return numero1 > numero2 ? numero1 : numero2;
    case "lower":
      return numero1 < numero2 ? numero1 : numero2;
    default:
      const numeroAleatorio = Math.random();

      if (numeroAleatorio >= 0.5) return numero1;
      return numero2;
  }
}

const numeroEscolhido = choseNumber(10, 20, "greater");

console.log("Numero escolhido:", numeroEscolhido);

function somar(num1: number, num2: number): number {
  // quando a função nao retorna uma valor, podemos colocar "void"
  return num1 + num2;
}

// * Utility Types A ideia é permitir que vice crie novos tipos

// 1. Partial - todos os atributos da interface se tornam não obrigatório

type PersonParcial = Partial<Person>;

// 2. Required - todos os atributos da interface se torna obrigátórios

type PersonRequired = Required<Person>;

// 3. Pick - escolhe um atributo especifico

type PersonPicked = Pick<Person, "nome" | "idade">;

// 4. Omit - omitir um atributo especifico

type PersonOmit = Omit<Person, "profissao">;

// 5. Exclude - exclui

type CriterioExclude = Exclude<Criterio, "greater">;

// 6. Record

type Pessoas = Record<string, Person>

const pessoas: Pessoas = {
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
}