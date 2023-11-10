const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const api = require('./routes/api');

const app = express();

const whitelist = [
  'https://cv-artem-zakharchuk.vercel.app',
  'http://localhost:3000',
  'http://localhost:8000',
];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public/')));

app.use('/v1', api);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
