const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/client.html', (req, res) => res.sendFile(path.join(__dirname, 'client.html')));
app.get('/admin.html', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: '*' } // allows connections from any origin
});

io.on('connection', socket => {
  socket.on('offer', data => socket.broadcast.emit('offer', data));
  socket.on('answer', data => socket.broadcast.emit('answer', data));
  socket.on('ice-candidate', data => socket.broadcast.emit('ice-candidate', data));
});

// Use PORT provided by Render
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
