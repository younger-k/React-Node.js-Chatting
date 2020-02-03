import React from 'react';
import socketio from 'socket.io-client';
// const socket = socketio.connect('http://localhost:4000');

class Chatting extends React.Component {
  // sendMessage = () => {
  //   socket.emit('init', {name: this.props.nickname});
    
  //   socket.on('welcome', (msg) => {
  //     console.log(msg);
  //   })
  // }

  render() { 
    return(
      <div className='chatting-wrapper'>
        <div id='chatting-content'></div>
      </div>
    )
  }
}

export default Chatting