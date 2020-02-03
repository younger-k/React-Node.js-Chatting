const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')

app.use(cors());
server.listen(4000, () => console.log('server is running on port 4000...'))

const socketio = require('socket.io')();
const io = socketio.listen(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('init', (data) => {
    console.log(data.name);
    socket.emit('welcome', `hello! ${data.name} your socket id is ${socket.id}`);
  })
})