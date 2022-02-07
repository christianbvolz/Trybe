const cepModel = require('../model/cepModel');

const findByCep = async(cep) => {
  const adress = await cepModel.findByCep(cep);

  return adress;
};

const create = async(newAdress) => {
  const adress = await cepModel.findByCep(newAdress.cep);
  
  if (adress.length !== 0) return {
    error: { code: 'alreadyExists', message: 'CEP já existente' }
  };

  await cepModel.create(newAdress);
};


module.exports = {
  findByCep,
  create,
};
