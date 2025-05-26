//  Object literal

const array = ["Emilly", 20, 1.65, true];

const pessoa = {
  nome: "Emilly",
  idade: 20,
  altura: 1.77,
  ehProgramadora: true,
  hobbie: ["faz croche", "Academia", "Joga Minecraf"],
  imprimirAlgo: () => {
    console.log("opa");
  },
};

console.log(pessoa.nome);
console.log(pessoa.hobbie);
console.log(pessoa["idade"]);

// adiciona mais um atributo no objeto
pessoa.profissao = "desenvolvedora";

// muda o valor de um atributo no objeto
pessoa.nome = "Emilly Liberato";

// deleta um atributo do objeto
delete pessoa.altura;

console.log(pessoa);

console.clear();

pessoa.imprimirAlgo();

const idade = 20;
const altura = 1.6;

const objeto = {
  idade,
  altura,
};

console.log(objeto);
console.clear();

// pegando um atributo do objeto
const { nome, hobbie } = pessoa;

console.log(nome);
console.log(hobbie);
console.log(pessoa);
