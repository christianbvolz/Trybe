const { encode, decode } = require('./encodeAndDecode.js');

describe('exercicio 1', () => {
  it('Teste se encode e decode são funções.', () => {
    expect(typeof(encode)).toBe('function');
    expect(typeof(decode)).toBe('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente.', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente.', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso.', () => {
    expect(encode('respectivamente')).toBe('r2sp2ct3v1m2nt2');
    expect(decode('r2sp2ct3v1m2nt2')).toBe('respectivamente');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('respectivamente').length).toBe(15);
    expect(decode('r2sp2ct3v1m2nt2').length).toBe(15);
  });
});