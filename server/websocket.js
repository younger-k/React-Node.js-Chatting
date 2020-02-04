const express = require('express')
const app = express()

const server = require('http').createServer(app);
server.listen(4000, () => console.log('server is running on port 4000...'))

const cors = require('cors')
app.use(cors());

const socketio = require('socket.io')();
const io = socketio.listen(server);

io.on('connection', (socket) => {
  console.log('a user connected. socket id : ' + socket.id);

  socket.on('join', (name) => {
    socket.join(name);
  })

  socket.on('sendmsg', (data) => {
    const {room_name, nickname, msg} = data
    io.to(room_name).emit('sendmsg', `${nickname} : ${msg}`);
  })
  socket.on('disconnect', () => {
    console.log('a user disconneted. socket id : ' + socket.id);
  })

})
