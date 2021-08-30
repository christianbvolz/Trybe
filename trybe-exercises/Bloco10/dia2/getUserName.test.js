const getUserName = require('./getUserName.js');

describe('Exercicio 2', () => {
  test('Verifica se a função getUserName retorna o usuario esperado', () => {
    expect.assertions(1);
    return getUserName(1).then((response) => expect(response).toBe('Mark'));
  });
  
  test('Verifica se a função getUserName retorna erro para o caso em que o usuário não é encontrado', () => {
    const id = 3;
    expect.assertions(1);
    return getUserName(id).catch((error) => {
      expect(error).toEqual(new Error(`User with ${id} not found.`));
    });
  });
});

describe('exercicio 3', () => {
  test('Verifica se a função getUserName retorna o usuario esperado', async () => {
    expect.assertions(1);
    const response = await getUserName(1);
    expect(response).toBe('Mark');
  });
  
  test('Verifica se a função getUserName retorna erro para o caso em que o usuário não é encontrado', async () => {
    const id = 3;
    expect.assertions(1);
    try {
      const response = await getUserName(3);
    } catch (error) {
      expect(error).toEqual(new Error(`User with ${id} not found.`));
    }
  });
});