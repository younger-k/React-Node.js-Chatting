import React from 'react';
import {withRouter} from 'react-router-dom';

class CreateUser extends React.Component {
  
  handleCreateUser = (e) => {
    e.preventDefault();
    const _nickname = e.target.nickname.value;

    this.props.history.push({
      pathname: '/list',
      state: {nickname: _nickname}
    })
  }
  render() {
    return(
      <div className='chatting-wrapper'>
        <div className='nickname-form'>
          <form action='/' onSubmit={this.handleCreateUser}>
            <input type='text' name='nickname'/>
            <input type='submit' value='입장' />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateUser)