const stringFunctions = require('./stringFunctions');

describe('exercicio 5', () => {
  it('Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar', () => {
    expect.assertions(5);
    const lowerCase = jest.spyOn(stringFunctions, 'upperCase')
    .mockImplementation((string) => string.toLowerCase());
    expect(lowerCase).toHaveBeenCalledTimes(0);
    expect(lowerCase('FUNCTION')).toBe('function');
    expect(lowerCase).toHaveBeenCalledWith('FUNCTION');
    expect(lowerCase).toHaveBeenCalledTimes(1);
    stringFunctions.upperCase.mockRestore();
    expect(stringFunctions.upperCase('function')).toBe('FUNCTION');
  });
});
