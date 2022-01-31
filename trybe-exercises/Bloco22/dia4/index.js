const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const { getSimpsons, setSimpsons } = require('./simpsonsFuncs.js');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (+age <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await getSimpsons();

  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
    const simpsons = await getSimpsons();

    const character = simpsons.find((char) => char.id === id);

    if (!character) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(character);
  })
);

app.post('/simpsons', rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await getSimpsons();

    const verifyChar = simpsons.some((char) => char.id === id);

    if (verifyChar) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await setSimpsons(simpsons);

    res.status(204).end();
  })
);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});