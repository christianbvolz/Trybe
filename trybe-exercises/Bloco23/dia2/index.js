const express = require('express');
const bodyParser = require('body-parser');
const cepController = require('./controller/cepController');
const { isValidCep } = require('./middlewares/isValidCep');
const { isValidAdress } = require('./middlewares/isValidAdress');
const errorMiddleware = require('./middlewares/error');
const pong = require('./controller/pong');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/ping', pong);

app.get('/cep/:cep',
  isValidCep,
  cepController.findByCep
);

app.post('/cep',
  isValidCep,
  isValidAdress,
  cepController.create
);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
