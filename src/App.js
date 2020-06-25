import React from 'react';
import {connect} from 'react-redux';
import {getProfile} from './redux/actions';
import { Route, Switch, Link } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import {ConnectedRouter} from 'connected-react-router';
import Projects from './components/Projects/Projects';

class App extends React.Component 
{
  componentWillMount = () => 
  {
    this.props.getProfile();
  }

  
  render()
  {
    // const {history} = this.props;
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

const mapDispatchToProps = dispatch => ({
  getProfile: () => dispatch(getProfile())
});

// const mapStateToProps = state => ({
//   data: state.data.data
// });

export default connect(null, mapDispatchToProps)(App);
