const uppercase = require('./uppercase.js');

test('Verifica se a chamada do callback da função uppercase resulta o esperado', (done) => {
  uppercase('Testando', (result) => {
    expect.assertions(1);
    try {
      expect(result).toBe('TESTANDO');
      done();
    } catch (error) {
      done(error);
    }
  });
});