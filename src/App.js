import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import {ConnectedRouter} from 'connected-react-router';
import Projects from './components/Projects/Projects';

class App extends React.Component 
{
  render() 
  {
    let {history} = this.props;
    
    return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path='/auth' component={Auth} />
            <Route exact path='/' component={Home} />
            <Route exact path='/projects/:id' component={Projects} />
          </Switch>
        </ConnectedRouter>
      </React.Fragment>
    );
  }
}

export default App;
