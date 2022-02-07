const connection = require('./connection');

const findByCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?';

  return await connection.execute(query, [cep])
    .then(([result]) => result);
}

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
}

module.exports = {
  findByCep,
  create,
};
