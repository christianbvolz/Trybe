/* fs-utils.js */
const fs = require('fs');

function getSimpsons () {
  return fs.promises.readFile('./simpsons.json', 'utf-8')
    .then(result => JSON.parse(result));
}

function setSimpsons (newCharacter) {
  return fs.promises.writeFile('./simpsons.json', JSON.stringify(newCharacter));
}

module.exports = { getSimpsons, setSimpsons };