const { log, error } = require("console");
const fs = require("fs");

//* 1. Callbacks

/*
console.log("ANTES da função de ler o arquivo...");


// função assíncrona (ler um arquivo leva um tempo)
fs.readFile("02 - javaScript/aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
  } else {
    console.log(String(conteudoDoArquivo));
  }
});

console.log("DEPOIS da função de ler o arquivo...");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
*/

//* Exemplo 02: setTimeout (função que cria um timer)

/*
console.log("Antes do setTimeout");


setTimeout(() => {
  console.log("Isso aqui vai ser excutado após 2 segundos");
  
}, 2 * 1000)

console.log("DEPOIS do setTimeout...");
*/

//* 2. Promesses

// console.log("ANTES da criação da promesse...");

function lerAquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "02 - javaScript/aula-13/arquivo.txt",
      (erro, conteudoDoArquivo) => {
        if (erro) {
          reject("Ocorreu um erro ao tentar ler o arquivo:", erro); // rejeita a promessa
        } else {
          resolve(String(conteudoDoArquivo)); // resolve a promessa
        }
      }
    );
  }); // criando uma promessa
}
/*
// Foco a partir daqui...
lerAquivoPromisse()
  .then((retornoDoResolveDaPromessa) => {
    // quando a promessa for cumprida
    console.log("Deu certo:", retornoDoResolveDaPromessa);
  })
  .catch((erro) => {
    // quando a promessa não for cumprida
    console.log("Deu ruim", erro);
  })
  .finally(() => {
    console.log(
      "Isso aqui vai ser executada, independete de sucesso ou fracasso da promessa, no final dela"
    );
  });
*/

//* 3. assync/await

async function leituraDeDados() {
  console.log("Isso é executado antes da promise ser resolvida!");

  try {
    const dadosDOAquivoLido = await lerAquivoPromise(); //espera a promessa ser resolvida ser resolvido para avançar no código

    console.log(dadosDOAquivoLido);
    console.log("Isso é executado DEPOIS da promise ser resolvida!");
  } catch (err){
    console.log(err);
    console.log("Isso aqui é executado depois da promessa (com erro)");
  } finally {
    console.log("Dentro do finally!");
  }
}

leituraDeDados();
