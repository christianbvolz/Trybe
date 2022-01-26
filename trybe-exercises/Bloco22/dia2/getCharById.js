const fs = require('fs');

const getCharById = async (id) => {
  const result = await fs.promises.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(result);
  const character = simpsons.find(char => Number(char.id) === id);
  if (!character) throw new Error('id não encontrado');
  return character;
};

module.exports = getCharById;
