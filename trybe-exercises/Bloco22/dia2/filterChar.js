const fs = require('fs');

const filterChar = async () => {
  const result = await fs.promises.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(result);
  const filter = simpsons.filter(({ id }) => id !== '10' && id !== '6');
  return filter;
}

module.exports = filterChar;
