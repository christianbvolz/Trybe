const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const escreveAlgo = require('../escreveAlgo');

describe('Executa a função escreveAlgo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  
  after(() => {
    fs.writeFileSync.restore();
  });

  it('O resultado é uma "string"', () => {
    const result = escreveAlgo('algo.txt', 'xablau');
    
    expect(result).to.be.a('string');
  });
  
  it('O resultado é igual a "ok"', () => {
    const result = escreveAlgo('algo.txt', 'xablau');

    expect(result).to.be.equals('ok');
  });
});