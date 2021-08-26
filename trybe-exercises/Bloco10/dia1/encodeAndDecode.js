function encode(string) {
  let result = '';
  for (let character of string) {
    switch (character) {
    case ('a'):
      result += '1';
      break;
    case ('e'):
      result += '2';
      break;
    case ('i'):
      result += '3';
      break;
    case ('o'):
      result += '4';
      break;
    case ('u'):
      result += '5';
      break;
    default:
      result += character;
      break;
    }
  }
  return result;
}

function decode(string) {
  let result = '';
  for (let character of string) {
    switch (character) {
    case ('1'):
      result += 'a';
      break;
    case ('2'):
      result += 'e';
      break;
    case ('3'):
      result += 'i';
      break;
    case ('4'):
      result += 'o';
      break;
    case ('5'):
      result += 'u';
      break;
    default:
      result += character;
      break;
    }
  }
  return result;
}

console.log(encode('respectivamente').length);

module.exports = { encode, decode };
