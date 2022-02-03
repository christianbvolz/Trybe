const express = require('express');
const bodyParser = require('body-parser');
const { formatUser, createUser, getUsers, editUser } = require('./models/user');
const isValidUser = require('./middlewares/createUser');
const isValidId = require('./middlewares/findUserById');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post(
  '/user',
  isValidUser,
  async (req, res) => {
    const { firstName, lastName, email, password  } = req.body;
    const result = await createUser(firstName, lastName, email, password);
    res.status(201).json(result);
})

app.get('/user', async (req, res) => {
  const result = await getUsers();
  res.status(200).json(result);
})

app.get(
  '/user/:id',
  isValidId,
  async (req, res) => {
  const result = req.user;
  res.status(200).json(result);
})

app.put(
  '/user/:id',
  isValidId,
  isValidUser,
  async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const userEdited = {id, firstName, lastName, email, password }
    await editUser(firstName, lastName, email, password, id);
    
    res.status(200).json(userEdited);
  })

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
