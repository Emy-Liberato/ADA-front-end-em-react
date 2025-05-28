// FILTER

// map: sempre retorna um array de mesmo tamanho de array original
// filter: sempre retorna um array de tamanho igual ou inferior ao tamanho do array original

let valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares);

console.clear();

// Exemplo 01 - retornar as notas dos alunos com a média maior que 85%

const alunos = [
  { nome: "Quincy", media: 96 },
  { nome: "Jason", media: 84 },
  { nome: "Alexis", media: 100 },
  { nome: "Sam", media: 65 },
  { nome: "Katie", media: 90 },
];

const alunosComMediaSuperiorA85 = alunos.filter((aluno) => {
  return aluno.media > 85
});

console.log(alunosComMediaSuperiorA85);

console.clear()

// Exemplo 02 - filtrar os produtos que são menos de 10,00 e não são bebidas

const produtos = [
  { nome: "Suco de laranja", preco: 7.50, tipo: 'Bebida' },
  { nome: "Batata frita", preco: 10.50, tipo: 'Comida' },
  { nome: "Pizza", preco: 12.49, tipo: 'Comida' },
  { nome: "Chocolate", preco: 1.50, tipo: 'Comida' },
  { nome: "Pastel", preco: 4.50, tipo: 'Comida' },
  { nome: "Coca", preco: 6.99, tipo: 'Bebida' }
];

const produtosFiltrados = produtos.filter((produto) => produto.preco < 10 && produto.tipo !== "Bebida")

console.log(produtosFiltrados);
