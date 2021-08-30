const stringFunctions = require('./stringFunctions');

jest.mock('./stringFunctions');
 
describe('exercicio 4', () => {
  it('Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.', () => {
    expect.assertions(4);
    stringFunctions.upperCase
    .mockImplementation((string) => string.toLowerCase());
    expect(stringFunctions.upperCase).toHaveBeenCalledTimes(0);
    expect(stringFunctions.upperCase('FUNCTION')).toBe('function');
    expect(stringFunctions.upperCase).toHaveBeenCalledWith('FUNCTION');
    expect(stringFunctions.upperCase).toHaveBeenCalledTimes(1);
  });

  it('Para a segunda função, uma nova implementação deve retornar a última letra de uma string.', () => {
    expect.assertions(4);
    stringFunctions.firstCharacter
    .mockImplementation((string) => string[string.length - 1]);
    expect(stringFunctions.firstCharacter).toHaveBeenCalledTimes(0);
    expect(stringFunctions.firstCharacter('FUNCTION')).toBe('N');
    expect(stringFunctions.firstCharacter).toHaveBeenCalledWith('FUNCTION');
    expect(stringFunctions.firstCharacter).toHaveBeenCalledTimes(1);
  });

  it('A terceira deve receber três strings e concatená-las.', () => {
    expect.assertions(4);
    stringFunctions.concatStrings
    .mockImplementation((string1, string2, string3) => `${string1}${string2}${string3}`);
    expect(stringFunctions.concatStrings).toHaveBeenCalledTimes(0);
    expect(stringFunctions.concatStrings('one', 'two', 'three')).toBe('onetwothree');
    expect(stringFunctions.concatStrings).toHaveBeenCalledWith('one', 'two', 'three');
    expect(stringFunctions.concatStrings).toHaveBeenCalledTimes(1);
  });
});
