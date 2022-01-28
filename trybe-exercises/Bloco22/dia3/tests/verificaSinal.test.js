const { expect } = require('chai');

const verificaSinal = require('../verificaSinal');

describe('Executa a função verificaSinal', () => {
  describe('Quando o numero for maior que 0', () => {
      it('O resultado é uma string', () => {
        const result = verificaSinal(10);
        expect(result).to.be.a('string');
      });

      it('O resultado é positivo', () => {
        const result = verificaSinal(10);
        expect(result).to.be.equals('positivo');
      });
  });

  describe('Quando o número for menor que 0', () => {
      it('O resultado é uma string', () => {
        const result = verificaSinal(-10);
        expect(result).to.be.a('string');
      });

      it('O resultado é negativo', () => {
        const result = verificaSinal(-10);
        expect(result).to.be.equals('negativo');
      });
  });

  describe('quando o número for igual a 0', () => {
      it('O resultado é uma string', () => {
        const result = verificaSinal(0);
        expect(result).to.be.a('string');
      });

      it('O resultado é neutro', () => {
        const result = verificaSinal(0);
        expect(result).to.be.equals('neutro');
      });
  });

  describe('Quando parametro não for um numero', () => {
    it('O resultado é uma string', () => {
      const result = verificaSinal('xablau');
      expect(result).to.be.a('string');
    });

    it('O resultado é "o parâmetro deve ser um número"', () => {
      const result = verificaSinal('xablau');
      expect(result).to.be.equals('o valor deve ser um número');
    });
});
});