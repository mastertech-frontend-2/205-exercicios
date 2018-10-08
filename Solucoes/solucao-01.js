// Função que gera números aleatórios
function aleatorio(minimo, maximo){
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

// Sorteio do número do computador
let sorteio = aleatorio(1, 50);

// Inicializar o número de tentativas
let tentativas = 5;

// Escolha do número do usuário
let chute = Number(prompt(`Adivinha o número que seu PC sorteou! É um número entre 1 e 50. Você tem ${tentativas} tentativas`));
// Subtrair uma tentativa do usuário.
tentativas--;

// Enquanto o usuario errar E ainda tiver tentativas restantes, repita a pergunta, informando se o número é maior ou menor
while(chute !== sorteio && tentativas > 0){
  if(chute < sorteio){
    alert("ERROU! O número sorteado é maior que o seu.");
  }
  else{
    alert("ERROU! O número sorteado é menor que o seu.");
  }

  chute = Number(prompt(`Tente novamente! Você ainda tem ${tentativas} tentativa(s).`));
  // Subtrair uma tentativa do usuário.
  tentativas--;
}

// Verificar qual foi o motivo do fim do jogo: acertou o número ou acabaram as tentativas?
if(chute === sorteio){
  alert("Parabéns, você acertou!");
}
else{
  alert(`Fim de jogo! Tentativas esgotadas! O número correto era: ${sorteio}`);
}