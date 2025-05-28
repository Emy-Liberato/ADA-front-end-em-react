//REDUCE

const numeros = [1, 2, 3, 4, 5];

// primeiro parametro - valor anterior
// segundo parametro - o valor que esta sendo percorrido
// terceiro parametro - index
// quarto parametro - array completo

const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  console.log(acumulador);
  return elemento / arrayCompleto.length + acumulador;
}, 0); //inicia o acumulador

console.log(media);

console.clear();

// somando apenas os numeros pares
const somaDosPares = numeros.reduce((acumulador, numero) => {
  // se o numero for par
  if (numero % 2 == 0) {
    return acumulador + numero;
  } else {
    return acumulador;
  }
}, 0);

console.log(somaDosPares);

//* Total a pagar do carrinho

const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const totalAPagar = carrinho.reduce((acumulador, item) => {
  return item.preco * item.quantidade + acumulador
}, 0);

console.clear
console.log(totalAPagar);
