const f1 = string => `Tryber ${string} aqui!`;

var skills = ['JS', 'HTML', 'DOM', 'CSS', 'Git'];

const f2 = string => `${f1(string)} Minhas cinco principais habilidades são:
${skills.sort()}...#goTrybe.`;

console.log(f2('ze'));