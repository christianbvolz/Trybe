const assert = require('assert');

const findTheNeedle = (array, word) => {
  if (array.includes(word) === false) {
    return  -1;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === word) {
      return index;
    }
  }
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);