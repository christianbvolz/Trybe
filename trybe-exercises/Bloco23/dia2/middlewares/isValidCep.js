const isValidCep = (req, res, next) => {
  let { cep } = req.params;
  if (!cep) cep = req.body.cep;
  const cepRegex = /\d{5}-?\d{3}/; 

  if (!cepRegex.test(cep)) return res.status(400).json({ 
    error: { code: 'invalidData', message: 'CEP inválido' }
  });

  const formatCep = cep.split('-').join('');

  req.params.cep = formatCep;
  
  next();
};

module.exports = {
  isValidCep,
};
