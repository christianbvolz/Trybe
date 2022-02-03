const connection = require('./connection');

const formatUser = ({ id, first_name, last_name, email }) => ({
  id,
  firstName: first_name,
  lastName: last_name,
  email,
});


const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO user (first_name, last_name, email, password) VALUES (?,?,?,?)';
  return await connection.execute(query, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

const getUsers = async () => {
  const query = 'SELECT * FROM user';
  const [result] = await connection.execute(query);
  return result;
}

const findUserById = async (id) => {
  const query = 'SELECT * FROM user WHERE user.id = ?';
  const [[result]] = await connection.execute(query, [id]);
  return result;
}

const editUser = async (firstName, lastName, email, password, id) => {
  const query = 'UPDATE user ' +
  'SET first_name = ?, ' +
  'last_name = ?, ' +
  'email = ?, ' +
  'password = ? ' +
  'WHERE id = ?';
  const result = await connection.execute(query, [firstName, lastName, email, password, id]);
  return result;
}


module.exports = {
  formatUser,
  createUser,
  getUsers,
  findUserById,
  editUser,
};
