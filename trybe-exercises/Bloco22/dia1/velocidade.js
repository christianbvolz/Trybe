const readline = require('readline-sync');

function calculaVelMed () {
  const distancia = readline.questionInt('Distância: ');
  const tempo = readline.questionInt('Tempo: ');

  const velMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${velMedia} m/s`);
}

calculaVelMed();