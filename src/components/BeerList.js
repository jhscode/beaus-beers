import React, { Component } from 'react';
import Beer from './Beer';

const apiKey = process.env.REACT_APP_API_KEY;
const rootURL = `http://lcboapi.com/products?access_key=${apiKey}`

class BeerList extends Component {
  state = {
    datas: []
  }

  // Instead of a prompt to ask what type of beer, below lifecycle method 
  // used to show Beau's beers preference to show on the app
  async componentDidMount() {
    // Documentation says API Call says maxiumum per page is 200. It is incorrect
    // API call filters for only beau's brewery, that is available at LCBO and is seasonal. Since Lug Tread is not seasonal, already filtered out.
    const url = await fetch(`${rootURL}&q=beaus+brewing&per_page=100&where_not=is_discontinued,is_dead&where=is_seasonal`)
    const datas = await url.json();
    this.setState({
      datas: datas.result
    });
    console.log(this.state.datas);
  }

  render() {
    return (
      <div className="beerlist-container">
        <ul className="beerlist-list">
          { this.state.datas.map(data =>
            <Beer 
              data={ data }
              key={ data.id }
              id= { data.id }
              desc= { data.description}
            />
          )}
        </ul>
      </div> 
    )
  }
}

export default BeerList;