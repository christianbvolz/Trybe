// Exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// Exercicio 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

console.log(soma);

// Exercicio 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

console.log(soma/numbers.length);

// Exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

if (soma/numbers.length > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual  a 20");
}

// Exercicio 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (maiorNumero < numbers[index]) {
    maiorNumero = numbers[index];
  }
  
}

console.log(maiorNumero);

// Exercicio 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if ((numbers[index] % 2) != 0) {
    contador += 1;
  }
}

if (contador === 0) {
  console.log("nenhum valor impar encontrado");
} else {
  console.log(contador);
}

// Exercicio 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (menorNumero > numbers[index]) {
    menorNumero = numbers[index];
  }
  
}

console.log(menorNumero);

// Exercicio 8

let resultado = [];
for (let index = 0; index < 25; index += 1) {
  resultado[index]= index + 1;
}
 console.log(resultado);

 // Exercicio 9

let resultado = [];
for (let index = 0; index < 25; index += 1) {
  resultado[index]= index + 1;
  console.log(resultado[index]/2)
}
