// Exercicio 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

console.log('Bem-vinda, ' + info.personagem + '!');

// Exercicio 2

info['recorrente'] = 'Sim';
console.log(info);

// Exercicio 3

for (let key in info) {
  console.log(key);
}

// Exercicio 4

for (let key in info) {
  console.log(info[key]);
}

// Exercicio 5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info) {
   if (key === 'recorrente' && info.recorrente === info2.recorrente) {
    console.log('Ambos recorrentes');
   } else {
    console.log(info[key] + ' e ' + info2[key]);
   }
}

// Parte 2

// Exercicio 1

function testePalindromo(palavra) {
  let contador = 1;
  for (let index in palavra) {
    if (palavra[index] != palavra[palavra.length - contador]) {
      return console.log('False');
    }
    contador += 1;
  }
  return console.log('True');
}

testePalindromo('arara');

// Exercicio 2

function indexMaxValue(array) {
  for (let index in array) {
    if (array[index === Math.max(array)]);
    return console.log(index);
  }
}

indexMaxValue([1, 2, 6, 9, 5, 8, 10]);

// Exercicio 3

function indexMinValue(array) {
  for (let index in array) {
    if (array[index === Math.min(array)]);
    return console.log(index);
  }
}

indexMinValue([1, 2, 6, 9, 5, 8, 10]);

// Exercicio 4

function maxCharacters(array) {
  let max = array[0].length;
  for (let index in array) {
    if (max < array[index].length) {
      max = array[index].length;
    }
  }
  return console.log(max);
}

maxCharacters(['batata', 'pao', 'pizza', 'lasanha', 'tapioca', 'churrasco']);

// Exercicio 5

function numberRepeat(array) {
  let numRepeat = 0;
  let contador = 0;
  let contador2 = 0;
  for (let index in array) {
    for (let index2 in array) {
      if (array[index] === array[index2]){
        contador += 1;
      }
    }
    if (contador > contador2) {
      contador2 = contador;
      numRepeat = array[index];
    }
    contador = 0;
  }
  return console.log(numRepeat);
}

numberRepeat([2, 3, 2, 5, 8, 2, 3]);

// Exercicio 6

function somaN(number) {
  let soma = 0;
  for (let x = 1; x <= number; x += 1) {
    soma += x;
  }
  return console.log(soma);
}

somaN(5);

// Exercicio 7

function verificaFimPalavra(word, ending) {
  let contador = 1;
  for (let index = ending.length - 1; index >= 0; index -= 1) {
    if (ending[index].toLowerCase() != word[word.length - contador].toLowerCase()){
      return console.log('False');
    }
    contador += 1;
  }
  return console.log('True');
}

verificaFimPalavra('Trybe', 'Be')