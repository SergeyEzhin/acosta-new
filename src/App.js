import React from 'react';
import {connect} from 'react-redux';
import {getProfile} from './redux/actions';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import {ConnectedRouter} from 'connected-react-router';

class App extends React.Component 
{
  componentDidMount = () => 
  {
    this.props.getProfile()
  }

  
  render()
  {
    // const {history} = this.props;
    let {history, context} = this.props;

    return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/' component={Auth} />
            <Route path='/home' component={Home} />
          </Switch>
        </ConnectedRouter>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfile: () => dispatch(getProfile())
});

export default connect(null, mapDispatchToProps)(App);
