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
            <Route path='/auth' component={Auth} />
            <Route exact path='/' component={Home} />
            <Route path='/projects/:id' component={Projects} />
            {/* <Route path="/goods/:id" component={Goods} />
            <Route path="/report/:id" component={Report} /> */}
          </Switch>
        </ConnectedRouter>
      </React.Fragment>
    );
  }
}

export default App;
