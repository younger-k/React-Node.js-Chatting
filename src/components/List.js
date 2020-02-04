import React from 'react';
import ChatRoom from './Room';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      list: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:4002/chat/list')
      .then(res => res.json())
      .then(result => this.setState({
        isLoaded: true,
        list: result
      }))
  }
  render() {
    const {nickname} = this.props.location.state;
    
    return(
      <div className='list-wrapper'>
        {this.state.list.map((obj, index) => <ChatRoom key={index} info={obj} nickname={nickname} />)}
      </div>
    )
  }
}

export default List