import React from 'react';

class CreateUser extends React.Component {
  render() {
    return(
      <div className='chatting-wrapper'>
        <div className='nickname-form'>
          <form action='/' onSubmit={this.props.handleSubmit}>
            <input type='text' name='nickname'/>
            <input type='submit' value='입장' />
          </form>
        </div>
      </div>
    )
  }
}

export default CreateUser