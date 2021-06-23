//Parte II

const nome = "Christian Berny Volz";
const birthCity = "pelotas/RS";
const birthYear = 1993;
console.log(nome);
console.log(birthCity);
console.log(birthYear);

//Parte III

let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = 2*base + 2*altura;
console.log(area);
console.log(perimetro);

//Parte IV

let nota = 80;
let resultado;
if (80 <= nota) {
  resultado = "Parabéns, você foi Aprovado(a)!";
  console.log(resultado);
}
else if (60 <= nota) {
  resultado ="Você está na nossa lista de espera",
  console.log(resultado);
}
else {
  resultado ="Você foi reprovada(o)",
  console.log(resultado);
}

//Parte V

let status = "Reprovado";
switch (status) {

  case "Aprovado":
    console.log("Parabéns, você foi Aprovado(a)!");
    break;

  case "Lista":
    console.log("Você está na nossa lista de espera");
    break;

  case "Reprovado":
    console.log("Você foi reprovada(o)");
    break;

  default:
    console.log("Valor não identificado");
}