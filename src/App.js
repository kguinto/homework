import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {API_HOST} from './constants';

class App extends Component {

  componentDidMount() {
    fetch(`${API_HOST}/api/users/`)
      .then((res) => res.json())
      .then(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
