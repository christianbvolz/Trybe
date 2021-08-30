const myRemove = require("./myRemove.js");

describe('Exercicio 2', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifique se o array passado por parâmetro não sofreu alterações.', () => {
    const array = [2, 4, 6, 8];
    expect(myRemove(array, 4)).not.toEqual(array);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(myRemove([1, 2, 3, 4], 5)).not.toContain(5);
  });
});