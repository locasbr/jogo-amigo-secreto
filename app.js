//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesArray = [];
let colocarNome = document.querySelector(".input-name");
let adicionarNome = document.querySelector(".button-add");
let listaDeNome = document.querySelector(".name-list");
let botaoSortear = document.querySelector(".button-draw");
let resultadoDoSorteio = document.querySelector(".result-list");
let textoTitulo = document.querySelector(".section-title");

function adicionarAmigo() {
  if (colocarNome.value != "") {
    let listas = colocarNome.value;
    nomesArray.push(listas);
    let criarLi = document.createElement("li");
    listaDeNome.appendChild(criarLi).textContent = listas;      colocarNome.value = "";
  
  } else {
    alert("Por favor, insira um nome válido");
  }
}

function sortearAmigo() {
  let nomeAleatorio = Math.floor(Math.random() * nomesArray.length);
  let criarLi = document.createElement("li");
  resultadoDoSorteio.appendChild(
    criarLi
  ).textContent = `O amigo secreto sorteado é: ${nomesArray[nomeAleatorio]}`;
}
