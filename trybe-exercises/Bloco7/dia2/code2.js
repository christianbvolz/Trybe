const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (object, key, value) => {
  object[key] = value;
}
addTurno(lesson2,'turno', 'manhã');

const listKeys = (object) => console.log(Object.keys(object));

const objectLength = (object) => console.log(Object.keys(object).length);

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});

const estudantes = (object) => {
  let total = 0;
  for(let item in object) {
    total += object[item].numeroEstudantes;
  }
  return total;
};

const getValueBynumber = (object, number) => Object.keys(object)[number];

const verifyPair = (object, key, value) => {
  if (Object.keys(object).includes(key) === true && object[key] === value) {
    return true;
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));