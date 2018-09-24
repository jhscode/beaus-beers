import React, { Component } from 'react';
import './App.css';

const apiKey = process.env.REACT_APP_API_KEY;
const rootURL = `http://lcboapi.com/products?access_key=${apiKey}`

class App extends Component {  
  state = {
    product: 'beer',
    datas: []
  }

  async componentDidMount() {
    const url = await fetch(`${rootURL}&q=beer`);
    const datas = await url.json();
    this.setState({
      datas: datas.result
    });
    console.log(datas);
  }

  onClickBeer = () => {
    console.log(this.state.datas)
  }
  
  render() {
    return (
      <div className="App">
      <button onClick={ this.onClickBeer }>Click Me To See The Beer</button>
      </div>
    );
  }
}

export default App;
