const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc1, element) => 
    acc1 + element.split('').reduce((acc2, letra) => {
      if (letra.toLowerCase() === 'a') {
        return acc2 + 1;
      }
      return acc2;
    }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);