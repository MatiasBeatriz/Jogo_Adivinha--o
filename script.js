var sorteio = sorteia(10);
var tentativas = 2;
var input = document.getElementById("numero-input");
var button = document.querySelector("button");
var tentativasRestantes = document.getElementById("tentativas-restantes");
var feedback = document.getElementById("feedback");

function sorteia(n) {
    return Math.floor(Math.random() * n) + 1; // Adicionei +1 para que o número seja entre 1 e 10
}

function verifica() {
    var valor = parseInt(input.value);
    if (isNaN(valor) || valor < 1 || valor > 10) {
        feedback.textContent = "Por favor, digite um número válido entre 1 e 10.";
        return;
    } // para iniciar o jogo

    tentativas--;

    if (valor === sorteio) {
        feedback.textContent = "Você ACERTOU !!! O número secreto é: " + sorteio;
        resetGame(); // se acertar 
    } else if (tentativas > 0) {
        if (valor < sorteio) {
            feedback.textContent = "O número é maior. Tente novamente."; // dica
        } else {
            feedback.textContent = "O número é menor. Tente novamente.";
        }
        tentativasRestantes.textContent = "Tentativas restantes: " + tentativas;
    } else {
        feedback.textContent = "Você errou! O número secreto era: " + sorteio;
        resetGame();
    } //errou
}

function resetGame() {
    sorteio = sorteia(10);
    tentativas = 2;
    tentativasRestantes.textContent = "Tentativas restantes: 2";
    input.value = '';
}

button.onclick = verifica;
// documento para funçoes do jogo








