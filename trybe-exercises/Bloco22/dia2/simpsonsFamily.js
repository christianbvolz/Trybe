const fs = require('fs');

const simpsonsFamily = async () => {
  const result = await fs.promises.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(result);
  const array = simpsons.filter(({ name }) => name.includes('Simpson'));
  fs.promises.writeFile('./simpsonsFamily.json', JSON.stringify(array));
}

module.exports = simpsonsFamily;
