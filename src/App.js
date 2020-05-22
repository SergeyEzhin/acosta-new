import React from 'react';
import Auth from './components/Auth/Auth';
import {Route, Switch, Redirect, withRouter, Router, BrowserRouter} from "react-router-dom"
import {Home} from './components/Home/Home';
import {connect} from 'react-redux';
import {getProfile} from './redux/actions'

class App extends React.Component 
{
  componentDidMount = () => 
  {
    this.props.getProfile()
  }
  
  render()
  {
    // const {history} = this.props;

    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/home' component={Home} />
          <Redirect from='/' to='/auth'/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfile: () => dispatch(getProfile())
});

export default connect(null, mapDispatchToProps)(App);
