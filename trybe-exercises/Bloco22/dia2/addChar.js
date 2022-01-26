const fs = require('fs');

const addChar = async () => {
  const result = await fs.promises.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(result);
  simpsons.push({ "id": "8","name": "Nelson Muntz" });
  fs.promises.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
}

module.exports = addChar;
