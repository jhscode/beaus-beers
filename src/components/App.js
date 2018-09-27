import React, { Component } from 'react';
import BeerList from './BeerList';
import '../styles/App.css';

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
