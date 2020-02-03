import React from 'react';
import socketio from 'socket.io-client';
const socket = socketio.connect('http://localhost:4000');

class Chatting extends React.Component {
  handleSendMessage = (e) => {
    e.preventDefault();
    
    socket.emit('sendmsg',
      {
        nickname: this.props.nickname,
        msg: e.target.msg.value
      }
    )
  }
  
  handleRecvMessage = () => {
    socket.on('receivemsg', (msg) => {
      let el_p = document.createElement('p');
      el_p.innerHTML = msg;
      
      const el_div = document.getElementById('chatting-content');
      el_div.append(el_p); 
    })
  }
  
  componentDidMount() {
    this.handleRecvMessage();
  }

  render() { 
    return(
      <div className='chatting-wrapper'>
        <div id='chatting-content'></div>
        <form onSubmit={this.handleSendMessage}>
          <input type='text' name='msg'/>
          <input type='submit' value='전송'/>
        </form>
      </div>
    )
  }
}

export default Chatting