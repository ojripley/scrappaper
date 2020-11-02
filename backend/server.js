// IMPORTS
const PORT = process.env.PORT || 8080;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// SETUP
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const server = require('http').Server(app);

// LAUNCH
server.listen(PORT, () => {
  console.log(`\n[Server is listening on ${PORT}]\n`);
});

// PLACEHOLDER DATA
const users = {
  rips: {
    username: 'rips',
    password: 'p'
  }
};

// ROUTES
app.get('/', (req, res) => {
  res.send('Welkom to Welkom!');
});

app.get('/login', (req, res) => {
  console.log('received login request');

  res.send('login request acknowledged');
});

