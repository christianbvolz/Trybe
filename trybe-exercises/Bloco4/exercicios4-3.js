// Exercicio 1

let n = 3;
let asterisco = '*';
let linha = '';
for (let index = 1; index <= n; index += 1) {
  linha = linha + asterisco;
}
for (let index = 1; index <= n; index += 1) {
  console.log(linha);
}

// Exercicio 2

let n = 5;
let asterisco = '*';
let linha = '';
for (let index = 1; index <= n; index += 1) {
  linha = linha + asterisco;
  console.log(linha);
}

// Exercicio 3

let n = 5;
let asterisco = '*';
let linha = '';
let espaço = ' ';

for(let index2 = 0; index2 < n; index2 += 1) {
  for (let index = 1; index <= n; index += 1) {
    if (index < n - index2) {
      linha = linha + espaço;
    } else {
      linha = linha + asterisco;
    }
    
  }
  console.log(linha);
  linha = '';
}

// Exercicio 4

let n = 9;
let asterisco = '*';
let linha = '';
let espaço = ' ';
let quantidadeLinhas = Math.ceil(n/2);


for (let index = 0; index < quantidadeLinhas; index += 1) {

  for (let index2 = 1; index2 <= n; index2 += 1) {

    if (n % 2 ===0 && (index2 < n/2 - index || index2 > n/2 + 1 + index)) {
      linha = linha + espaço;
    } else if (n % 2 === 0 && index2 >= n/2 - index && index2 <= n/2 + 1 + index) {
      linha = linha + asterisco;
    } else if (n % 2 != 0 && (index2 < Math.ceil(n/2) - index || index2 > Math.ceil(n/2) + index)) {
      linha = linha + espaço;
    } else if (n % 2 != 0 && (index2 >= Math.ceil(n/2) - index && index2 <= Math.ceil(n/2) + index)) {
      linha = linha + asterisco;
    }
  }
  console.log(linha);
  linha = '';
}

// Exercicio 5

let n = 9;
let asterisco = '*';
let linha = '';
let espaço = ' ';
let quantidadeLinhas = Math.ceil(n/2);


for (let index = 0; index < quantidadeLinhas; index += 1) {

  for (let index2 = 1; index2 <= n; index2 += 1) {

    if (n % 2 ===0 && (index2 < n/2 - index || index2 > n/2 + 1 + index)) {
      linha = linha + espaço;
    } else if (n % 2 === 0 && index2 >= n/2 - index && index2 <= n/2 + 1 + index) {
      linha = linha + asterisco;
    }
    if (n % 2 != 0 && (index2 < Math.ceil(n/2) - index || index2 > Math.ceil(n/2) + index)) {
      linha = linha + espaço;
    } else if (n % 2 != 0 && (index2 >= Math.ceil(n/2) - index && index2 <= Math.ceil(n/2) + index)) {

      if (index === 0 || index === quantidadeLinhas - 1) {
        linha = linha + asterisco;
      } else {

      }
    }
  }
  console.log(linha);
  linha = '';
}