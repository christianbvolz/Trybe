const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso(quilos)? ');
  const altura = readline.questionFloat('Qual a sua altura(metros)? ');

function calculaImc (peso, altura) {
  const imc = (peso / ((altura) ** 2)).toFixed(2);
  console.log(imc);
  if (imc < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return;
  } else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
    return;
  } else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso (sobrepeso)');
    return;
  } else if (imc >= 30 && imc < 35) {
    console.log('Obesidade grau I');
    return;
  } else if (imc >= 35 && imc < 40) {
    console.log('Obesidade grau II');
    return;
  } else {
    console.log('Obesidade graus III e IV');
  }
}

calculaImc(peso, altura);
