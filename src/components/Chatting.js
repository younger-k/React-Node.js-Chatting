import React from 'react';
import socketio from 'socket.io-client';
const socket = socketio.connect('http://localhost:4000');

class Chatting extends React.Component {
  constructor(props) {
    super(props);
    const {seq} = this.props.match.params;
    socket.emit('join', `room${seq}`);
  }
  
  handleSendMessage = (e) => {
    e.preventDefault();
    
    const {seq} = this.props.match.params;
    socket.emit('sendmsg',
      {
        room_name: `room${seq}`,
        nickname: this.props.location.state.nickname,
        msg: e.target.msg.value
      }
    )

    e.target.msg.value = '';
  }
  
  handleRecvMessage = () => {
    socket.on('sendmsg', (msg) => {
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