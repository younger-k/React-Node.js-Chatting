import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CreateUser from './components/CreateUser';
import Chatting from './components/Chatting';
import List from './components/List';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Router>
          <CreateUser handleSubmit={this.handleCreateUser}/>
          <Switch>
            <Route path='/list' component={List} />
            <Route path='/chat/:seq' component={Chatting} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
