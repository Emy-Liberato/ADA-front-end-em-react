// Fetch API

// then/catch

// fetch("https://viacep.com.br/ws/01001000/json/")
//   .then((resposta) => {
//     resposta.json().then((dados) => console.log(dados)); //transforma a resposta em json, como se trat de uma promesi precisamos usar o .then
//   })
//   .catch((erro) => {
//     console.error(erro);
//   });

// assycn/await

async function obterDadosDoCep() {
  try {
    const resposta = await fetch("https://viacep.com.br/ws/01001000/json/");
    const dados = await resposta.json();

    console.log(dados);
  } catch (erro) {
    console.log("Deu errado!", erro);
  } finally {
    console.log("terminou a requisição");
  }
}
