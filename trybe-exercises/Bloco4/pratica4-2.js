// Exercicio 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Exercicio 2

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio);

// Exercicio 3

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("Contato");

console.log(menu);

// Exercicio 4

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for ( let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index])
}

// Exercicio 5

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
  console.log(name);
}