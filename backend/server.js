// IMPORTS
const PORT = process.env.PORT || 8080;
const express = require('express');
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const cors = require('cors');

// SETUP
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const server = require('http').Server(app);

// PLACEHOLDER DATA
const users = {
  rips: {
    username: 'rips',
    password: 'p'
  }
};

// LAUNCH
server.listen(PORT, () => {
  console.log(`\n[Server is listening on ${PORT}]\n`);
});

// LISTEN FOR SOCKET CONNECTIONS
io.on('connection', (client) => {
  console.log('new connection');

  client.emit('text test', 'hello client');
});

