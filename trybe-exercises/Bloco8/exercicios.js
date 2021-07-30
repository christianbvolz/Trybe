// Exercicio 1

const employee = (string) => {
  let emailName = string.split(' ');
  emailName = emailName.join('_');
  return {nomeCompleto: string, email: `${emailName}@trybe.com`}
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), 
    id2: func('Luiza Drumond'), 
    id3: func('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(employee));

// Exercicio 2

const verifyNum = (number, result) => (number === result) ? 'Parabéns você ganhou!' : 'Tente novamente.';

const resultadoSorteio = (number, func) => {
  const result = Math.floor((Math.random() * 5) + 1);
   return func(number, result);
};

console.log(resultadoSorteio(2, verifyNum));

// Exercicio 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (gabarito, respostas) => {
  let result = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (gabarito[index] === respostas[index]) {
      result += 1;
    } else if (gabarito[index] !== respostas[index] && respostas[index] !== 'N.A') {
      result -= 0.5;
    }
  }
  return result;
};

const notaFinal = (gabarito, respostas, func) => {
  return `Sua nota final é: ${func(gabarito, respostas)}`
};

console.log(notaFinal(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));