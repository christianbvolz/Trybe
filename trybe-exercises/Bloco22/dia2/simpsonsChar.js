const fs = require('fs');

const simpsonsChar = () => {
  fs.promises.readFile('./simpsons.json', 'utf-8')
  .then(result => JSON.parse(result))
  .then(simpsons => simpsons.map(({ id, name }) => `${id} - ${name}`))
  .then(simpsons => simpsons.forEach(character => console.log(character)));
}

module.exports = simpsonsChar;
