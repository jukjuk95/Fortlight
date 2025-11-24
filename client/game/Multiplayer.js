const socket = io("https://fortelite-server.glitch.me"); // deine Glitch URL

// Senden der Spielerposition
function sendPosition(player){
  socket.emit('move', { x: player.x, y: player.y });
}

// Empfang der anderen Spieler
socket.on('playerMoved', data => {
  // Update Gegner-Positionen
});
