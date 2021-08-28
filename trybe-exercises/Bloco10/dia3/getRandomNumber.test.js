let getRandomNumber = require('./getRandomNumber');

describe('exercicio 1', () => {
  test('Testa se a função getRandomNumber foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    expect.assertions(3);
    getRandomNumber = jest.fn().mockReturnValue(10);
    expect(getRandomNumber).not.toHaveBeenCalled();
    expect(getRandomNumber()).toBe(10);
    expect(getRandomNumber).toHaveBeenCalledTimes(1);
  });
})

describe('exercicio 2', () => {
  test('crie uma nova implementação que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.', () => {
    expect.assertions(4);
    getRandomNumber = jest.fn().mockImplementationOnce((num1, num2) => num1 / num2);
    expect(getRandomNumber).not.toHaveBeenCalled();
    expect(getRandomNumber(20, 2)).toBe(10);
    expect(getRandomNumber).toHaveBeenCalledWith(20, 2);
    expect(getRandomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('exercicio 3', () => {
  test('crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.', () => {
    expect.assertions(8);
    getRandomNumber = jest.fn().mockImplementation((num1, num2, num3) => num1 * num2 * num3);
    expect(getRandomNumber).not.toHaveBeenCalled();
    expect(getRandomNumber(1, 2, 3)).toBe(6);
    expect(getRandomNumber).toHaveBeenCalledWith(1, 2, 3);
    expect(getRandomNumber).toHaveBeenCalledTimes(1);
    getRandomNumber.mockReset();
    getRandomNumber = jest.fn().mockImplementation((number) => number * 2);
    expect(getRandomNumber).toHaveBeenCalledTimes(0);
    expect(getRandomNumber(5)).toBe(10);
    expect(getRandomNumber).toHaveBeenCalledWith(5);
    expect(getRandomNumber).toHaveBeenCalledTimes(1);
  });
});