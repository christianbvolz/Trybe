const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = Animals.find((animal) => animal.name === name);
      if (response) {
        return resolve(response);
      }
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const findAnimalByAge = (Age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = Animals.find((animal) => animal.age === Age);
      if (response) {
        return resolve(response);
      }
      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
);

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then((response) => response);
};

const getAnimal = (name) => {
  return findAnimalByName(name).then((response) => response);
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      const animal = await getAnimal('Dorminhoco');
      expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      const animal = await getAnimalByAge(5);
      expect(animal).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(3).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});