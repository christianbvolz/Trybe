const assert = require('assert');

const wordLengths = (array) => {
  let result = [];
  for (const item of array) {
    result.push(item.length);
  }
  return result
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);