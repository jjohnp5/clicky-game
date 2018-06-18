import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clickity Game</h1>
        </header>
        <div className="container">
          <Game />

        </div>
      </div>
    );
  }
}

export default App;
