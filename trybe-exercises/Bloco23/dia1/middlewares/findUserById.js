const { findUserById } = require('../models/user');

const isValidId = async (req, res, next) => {
  const { id } = req.params;
  const user = await findUserById(id);

  if (!user) return res.status(404).json({
    error: true,
    message: 'Usuário não encontrado'
  });
  req.user = user;
  next();
};

module.exports = isValidId;
