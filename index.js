let button = document.querySelector(".btn");

button.addEventListener("click", () => {
  let name = prompt("Digite seu nome: ");

  if(name == "") {
    alert("Você esqueceu de digitar o seu nome!")
  } else {
    alert("Olá, " + name + "!");
  }
})