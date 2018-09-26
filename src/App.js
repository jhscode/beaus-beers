import React, { Component } from 'react';
import BeerList from './BeerList';
import './App.css';

class App extends Component {  
  
  render() {
    return (
      <div className="App">
        <BeerList />
      </div>
    );
  }
}

export default App;
