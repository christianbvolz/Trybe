const cepService = require('../service/cepService');

const findByCep = async (req, res) => {
  const { cep } = req.params;
  const adress = await cepService.findByCep(cep);

  if (adress.length === 0) return res.status(404).json({
    error: { code: 'notFound', message: 'CEP não encontrado' }
  });

  res.status(200).json(adress);
}

const create = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const newAdress = { cep, logradouro, bairro, localidade, uf };

  const status = await cepService.create(newAdress);

  if (status) return res.status(400).json(status);

  res.status(201).json(newAdress);
}


module.exports = {
  findByCep,
  create,
}