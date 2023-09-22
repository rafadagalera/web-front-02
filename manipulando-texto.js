let numFloat = 123.543;
let linguagens = ["Java", "C#", "Python"];
let txt = "Eu quero ir para casa!";

// funções nativas, ou seja, criada no js para alterar o tipo de uma variável
console.log(typeof numFloat.toString());
console.log(typeof String(numFloat));

// retornar um valor específico dentro de um array
console.log(linguagens[0])

// replace = função nativa de js utilizada para alterar elementos de uma string por outros
console.log(txt.replace("ir para casa!", "ir pro bar!"))