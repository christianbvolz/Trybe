const myFizzBuzz = require('./myFizzBuzz.js');

describe('exercicio 4', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz('oi')).toBeFalsy();
  });
});