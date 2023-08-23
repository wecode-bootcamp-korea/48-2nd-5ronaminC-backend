require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const appDataSource = require('./api/models/dataSource');
const { globalErrorHandler } = require('./api/utils/error');
const route = require('./api/routes');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(route);
app.use(globalErrorHandler);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(PORT, async () => {
  await appDataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((error) => {
      console.error('Error during Data Source initialized', error);
    });
  console.log(`Listening to request on port: ${PORT}`);
});