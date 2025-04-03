alert("Vamos começar o nosso jogo!");

//Sistema de dificuldade
let dificuldade = prompt("Escolha uma dificuldade: \n1 - Fácil \n2 - Médio \n3 - Difícil");

let numeroMaximo; // maximo do intervalo do numero secreto

if (dificuldade == 1) {
  numeroMaximo = 100;
} else if (dificuldade == 2) {
  numeroMaximo = 500;
} else {
  numeroMaximo = 1000;
}

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // Math.random() gera um número entre 0 e 1, multiplicamos por numeromaximo para ter um número entre 1 (pois eu fiz +1) e o numeromaximo
console.log("Número secreto: " + numeroSecreto);

alert(`Eu escolhi um número entre 1 e ${numeroMaximo}, você consegue adivinhar?`);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  let chute = prompt(`Me informe um valor entre 1 e ${numeroMaximo}`); //prompt é uma função que pede um valor para o usuário
  if (chute == numeroSecreto) {
    break;
  } else if (chute < numeroSecreto) {
    alert("Voce errou! O número secreto é maior que " + chute);
    alert("Continue tentando!");
  } else {
    alert(`Voce errou! O número secreto é menor que ${chute}`); //tamplate string
    alert("Continue tentando!");
  }
  tentativas++;
  console.log("Tentativa número " + tentativas + ": " + chute);
}
alert("Você acertou! O número secreto era " + numeroSecreto);

let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas"; //Operador ternario
alert(`Voce acertou em ${tentativas} ${palavraTentativa}`); //tamplate string
