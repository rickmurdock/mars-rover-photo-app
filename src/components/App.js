import React, { Component } from 'react';
import '../styles/App.css';
import GitImageForm from './GetImageForm';

class App extends Component {
  render() {
    return (
      <div>
        <GitImageForm style={{textAlign:"center"}}/>
      </div>
    );
  }
}

export default App;
