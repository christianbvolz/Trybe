// Exercicio 1

let a = 3;
let b = 2;
console.log(a + b);
console.log(a = b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercicio 2

a = 5;
b = -3;
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

// Exercicio 3

a = 4;
b = 6;
let c = -1;
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

// Exercicio 4

a = -2;
if (a > 0) {
  console.log("positive");
} else if (a < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// Exercicio 5

a = 60;
b = 90;
c = 30;
if ((a + b + c ) === 180 && a > 0 && b > 0 && c > 0) {
  console.log("True");
} else if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Erro");
} else {
  console.log("False");
}

// Exercicio 6

let peça = "Rei";
switch (peça.toLowerCase()) {

  case ("bispo"):
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
    break;
  
  case ("cavalo"):
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
    break;

  case ("torre"):
    console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
    break;

  case ("peão"):
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
    break;

  case ("rainha"):
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
    break;

  case ("rei"):
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
    break;
       
  default:
    break;
}

// Exercicio 7

let nota = 101;
if (nota >=  90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota <= 90) {
  console.log("B");
} else if (nota >= 70 && nota <= 80) {
  console.log("C");
} else if (nota >= 60 && nota <= 70) {
  console.log("D");
} else if (nota >= 50 && nota <= 60) {
  console.log("E");
} else if (nota < 50 && nota >= 0) {
  console.log("F");
} else if (nota < 0 || nota > 100) {
  console.log("Erro");
}

// Exercicio 8

a = 1;
b = 2;
c = 3;
if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log("True");
} else {
  console.log("False");
}

// Exercicio 9

a = 22;
b = 11;
c = 49;
if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
  console.log("True");
} else {
  console.log("False");
}

// Exercicio 10

let custo = 100;
let valor = 150;
if (custo < 0 || valor < 0) {
  console.log("Erro");
} else {
  let custoTotal = custo + custo*(20/100);
  let lucroPorProduto =  valor - custoTotal;
  console.log(lucroPorProduto*1000);
}

// exercicio 11

let salarioBruto = 3000;
let salario;
let salarioLiquido;
if (salarioBruto <= 1556.94) {
  salario = salarioBruto - salarioBruto*(8/100);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  salario = salarioBruto - salarioBruto*(9/100);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  salario = salarioBruto - salarioBruto*(11/100);
} else if (salarioBruto > 5189.82) {
  salario = salarioBruto - 570.88;
}

if (salario <= 1903.98) {
  salarioLiquido = salario;
} else if (salario > 1903.98 && salario <= 2826.65) {
  salarioLiquido = salario - (salario*(15/200) - 142.80);
} else if (salario > 2826.65 && salario <= 3751.05) {
  salarioLiquido = salario - (salario*(15/100) - 354.80);
} else if (salario > 3751.05 && salario <= 4664.68) {
  salarioLiquido = salario - (salario*(45/200) - 636.13);
} else if (salario > 4664.68) {
  salarioLiquido = salario - (salario*(55/200) - 869.36);
}
console.log(salarioLiquido);