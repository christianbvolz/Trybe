const errorMessage = (data) => ({
  error: true,
  message: `O campo '${ data }' é obrigatorio`,
});


const isValidUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  
  if (!firstName) return res.status(400).json(errorMessage('firstName'));
  if (!lastName) return res.status(400).json(errorMessage('lastName'));
  if (!email) return res.status(400).json(errorMessage('email'));
  if (!password) return res.status(400).json(errorMessage('password'));

  if(password.length < 6 || typeof password !== 'string')
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });

  next();
};

module.exports = isValidUser;
