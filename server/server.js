const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let players = {};

io.on('connection', socket => {
  console.log('New player:', socket.id);
  players[socket.id] = { x:500, y:500 };

  socket.emit('currentPlayers', players);
  socket.broadcast.emit('newPlayer', { id: socket.id, x:500, y:500 });

  socket.on('move', data => {
    players[socket.id] = data;
    socket.broadcast.emit('playerMoved', { id: socket.id, ...data });
  });

  socket.on('disconnect', () => {
    delete players[socket.id];
    io.emit('playerDisconnected', socket.id);
  });
});

server.listen(3000, () => console.log('Server running on port 3000'));
