const myRemoveWithoutCopy = require('./myRemoveWithoutCopy.js');

describe('exercicio 3', () => {
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado.', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain(3);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações.', () => {
    const array = [2, 4, 6, 8];
    expect(myRemoveWithoutCopy(array, 6)).toEqual(array);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});