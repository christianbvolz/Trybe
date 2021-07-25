// Parte I

// Exercicio 1

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(false);

// Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescente = array => array.sort((a, b) => a-b);

console.log(`Os números ${crescente(oddsAndEvens)} se encontram ordenados de forma crescente!`);

// Parte II

// Exercicio 1

const fatorial = number => {
  let result = 1;
  if (number < 0) {
    return 'Insira um número natural'
  } else if (number > 0) {
    for (let x = number; x > 1; x -= 1) {
      result *= x;
    }
  }
  return result;
}

console.log(fatorial(6));

const fatorial = number => number > 0 ? number * fatorial(number - 1) : 1;

console.log(fatorial(6));

// Exercicio 2

const longestWord = string => {
  string = string.split(' ');
  let longestWord = string[0];
  for (let index = 1; index < string.length; index += 1) {
    if (longestWord.length < string[index].length) {
      longestWord = string[index];
    }
  }
  return longestWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));