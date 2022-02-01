const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
const axios = require('axios');
const { isValidToken } = require('./middlewares/validations');
const errors = require('./middlewares/routerNotFound');
const postRouter = require('./routers/postRouter');
const teamRouter = require('./routers/teamRouter');

const PORT = 3001;
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);

app.get('/btc', isValidToken,
  async (_req, res) => {
    const result = await axios.get(ENDPOINTEXTERNALAPI);
    res.status(200).json(result.data);
  }
);

app.use('/posts', postRouter);

app.use('/teams', teamRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));

app.use(errors.routerNotFound);

app.listen(PORT, () => console.log('Run server http://localhost:3001'));