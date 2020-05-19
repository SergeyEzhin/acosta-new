import React from 'react';
import Auth from './components/Auth/Auth';
import {connect} from 'react-redux';

function App() {
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default connect(null, null)(App);
