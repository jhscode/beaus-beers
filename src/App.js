import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BeerList from './components/BeerList';
import StoreList from './components/StoreList';
import StoreMaps from './components/StoreMaps';  
import './styles/App.css';

const apiKey = process.env.REACT_APP_API_KEY;
const rootProductURL = `https://lcboapi.com/products?access_key=${apiKey}`;

class App extends Component {
  state = {
    datas: [],
    storeDataResult: [],
    nextPage:"",
    showDesc: false,
    showStore: false,
    page: null,
    name:"",
    price_in_cents: null,
    tasting_note: "",
    description: "",
    productID:"",
    lat: null,
    lng: null
  };

  // Instead of a prompt to ask what type of beer, below lifecycle method 
  // used to show Beau's beers preference to show on the app
  async componentDidMount() {
    // Documentation says API Call says maxiumum per page is 200. It is incorrect. Only 100.
    // API call filters for only beau's brewery, that is available at LCBO and is seasonal. Since Lug Tread is not seasonal, already filtered out.
    const url = await fetch(`${rootProductURL}&q=beaus+brewing&per_page=100&where_not=is_discontinued,is_dead&where=is_seasonal`)
    const datas = await url.json();
    this.setState({
      datas: datas.result
    });
  };

  // Since description can be empty, making variables for other descriptions of the beer to display
  showDescButton = (desc) => {
    // package is reserved word in strict mode. Make another name
    const { name, price_in_cents, tasting_note, serving_suggestion } = desc;
    this.setState({
      showDesc: true,
      name,
      price_in_cents,
      tasting_note,
      serving_suggestion
    });
  };
  // Button to hide the description of the beer
  hideDescButton = () => {
    this.setState({
      showDesc: false
    });
  };
  // Refresh the page depending on your preference
  updateStore = (productID) => {
    this.setState({
      productID
    });
  };

  updateMap = (lat, lng) => {
    this.setState({
      lat,
      lng
    })
  };

  render() {
    return (
      <Fragment>
        <Header />
        <BeerList 
          datas={this.state.datas}
          showDesc={this.state.showDesc}
          showDescButton={this.showDescButton}
          hideDescButton={this.hideDescButton}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;