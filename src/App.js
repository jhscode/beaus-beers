import React, { Component } from 'react';
import './App.css';

const apiKey = process.env.REACT_APP_API_KEY;
const rootURL = `http://lcboapi.com/products?access_key=${apiKey}`

class App extends Component {  
  state = {
    product: 'beer',
    data: null
  }
  
  onClickBeer = async (e) => {
    const url = await fetch(`${rootURL}&q=beer`);
    const data = await url.json();
    console.log(data);
    this.setState({
      data: data.results
    })
  }
  
  render() {
    return (
      <div className="App">
      <button onClick={ this.onClickBeer }>Click Me!</button>
      </div>
    );
  }
}

export default App;
