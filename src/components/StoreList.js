import React, { Component } from 'react';
import Store from './Store';
import StoreMaps from './StoreMaps';

const apiKey = process.env.REACT_APP_API_KEY;
const rootStoreURL = `http://lcboapi.com/stores?access_key=${apiKey}`;

class StoreList extends Component {
  state = {
    storeDataResults: [],
    nextPage:"",

  };

  async componentDidMount() {
    // make api call to stores
    const productID = this.props.state.productID;
    const storeURL = await fetch(`${rootStoreURL}&product_id=${productID}`);
    const storeData = await storeURL.json();
    console.log(storeData);
    const storeDataResults = storeData.result;
    const nextPage = storeData.pager.next_page_path;
    this.setState({
      storeDataResults,
      nextPage
    });
  };

  loadMoreStores = async() => {
    const nextPage = this.state.nextPage;
    const nextPageURL = await fetch(`http://lcboapi.com${nextPage}`);
    const nextPageData = await nextPageURL.json();
    const afterNextPage = nextPageData.pager.next_page_path;
    this.setState(() => ({
      storeDataResults: nextPageData.result,
      nextPage: afterNextPage
    }));
  };
  
  goToMapStore = (lat, lng) => {
    this.props.updateMap(lat, lng);
    this.props.history.push(`/map/${lat}`);
  };

  render() {
    return (
      <div className="store">
        <Store 
          storeDataResults={ this.state.storeDataResults }
          loadMoreStores= { this.loadMoreStores }
          goToMapStore={ this.goToMapStore }
        />
        {/* <StoreMaps /> */}
      </div>
    );
  };
};

export default StoreList;