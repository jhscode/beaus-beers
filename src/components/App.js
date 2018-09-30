import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BeerList from './BeerList';
import Store from './Store';
import NotFound from './NotFound';
import '../styles/App.css';

const apiKey = process.env.REACT_APP_API_KEY;
const rootProductURL = `http://lcboapi.com/products?access_key=${apiKey}`;

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
    productID:""
  }

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
  }

  // Since description can be empty, making variables for other descriptions of the beer to display
  showDescButton = (desc) => {
    // package is reserved word in strict mode. Make another name
    const { name, price_in_cents, tasting_note, description } = desc;
    this.setState({
      showDesc: true,
      name,
      price_in_cents,
      tasting_note,
      description
    });
  };

  hideDescButton = () => {
    this.setState({
      showDesc: false
    });
  };

  updateStore =(productID) => {
    this.setState({
      productID
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
        <Route 
          exact path="/"
          render={(props) => 
            <BeerList 
              {... props} state={this.state} 
              showDescButton={this.showDescButton}
              hideDescButton={this.hideDescButton}
              goToStoreButton={this.goToStoreButton}
              updateStore={this.updateStore}
            />
          }
        />
          <Route 
            path="/store/:storeid"
            render={(props) => 
              <Store {...props} state={this.state} 
          />
        }
          />  
        </div>
      </Router>
    );
  }
}

export default App;
