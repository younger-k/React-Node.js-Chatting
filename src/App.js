import React from 'react';
import CreateUser from './components/CreateUser';
import Chatting from './components/Chatting';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreated: false,
      nickname: undefined
    }
  }

  handleCreateUser = (e) => {
    e.preventDefault();
    const _nickname = e.target.nickname.value;
    
    this.setState({
      isCreated: true,
      nickname: _nickname
    })
  }

  render() {
    const {isCreated, nickname} = this.state;
    
    return(
      <div className="App">
        <CreateUser handleSubmit={this.handleCreateUser}/>
        {isCreated && <Chatting nickname={nickname}/>}
      </div>
    )
  }
}

export default App;
