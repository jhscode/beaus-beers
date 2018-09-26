import React, { Component } from 'react';
import Beer from './Beer';

const apiKey = process.env.REACT_APP_API_KEY;
const rootURL = `http://lcboapi.com/products?access_key=${apiKey}`

class BeerList extends Component {

  state = {
    datas: []
  }

  async componentDidMount() {
    // Documentation says API Call says maxiumum per page is 200. It is incorrect
    const url = await fetch(`${rootURL}&q=beaus+brewing&per_page=100&where_not=is_discontinued`)
    const results = await url.json();
    console.log(results);
    const datas = await
    this.setState({
      datas
    });
  }

  render() {
    return (
      <div>
        <Beer />
      </div> 
    )
  }
}

export default BeerList;