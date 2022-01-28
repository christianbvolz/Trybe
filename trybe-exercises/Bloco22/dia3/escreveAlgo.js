const fs = require('fs');

const escreveAlgo = (nome, conteudo) => {
  fs.writeFileSync(`${nome}`, conteudo);

  return 'ok';
}

module.exports = escreveAlgo;
