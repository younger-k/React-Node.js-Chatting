import React from 'react'
import {withRouter} from 'react-router-dom'

class ChatRoom extends React.Component {
  handleEnter = () => {
    const _nickname = this.props.nickname;

    this.props.history.push({
      pathname: `/chat/${this.props.info.seq}`,
      state: {
        nickname: _nickname
      }
    })
  }

  render() {
    const { seq, name } = this.props.info

    return(
      <div className='room-wrapper'>
        {seq} : {name}<button type='button' onClick={this.handleEnter}>입장</button>
      </div>
    )
  }
}

export default withRouter(ChatRoom)