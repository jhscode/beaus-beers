import React, { Component, Fragment } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;
const rootStoreURL = `http://lcboapi.com/stores?access_key=${apiKey}`;

class Store extends Component {
  state = {
    storeDataResults: [],
    nextPage:""
  };

  async componentDidMount() {
    // make api call to stores
    const productID = this.props.state.productID;
    const storeURL = await fetch(`${rootStoreURL}&product_id=${productID}`);
    const storeData = await storeURL.json();
    const storeDataResults = storeData.result;
    console.log(storeDataResults);
    const nextPage = storeData.pager.next_page_path;
    this.setState({
      storeDataResults,
      nextPage
    });
  };

  loadMoreStore = async() => {
    const nextpage = this.props.nextpage;
    console.log(nextpage);
    const nextPageURL = await fetch(`http://lcboapi.com/${nextpage}`);
    console.log(nextPageURL);
  };

  render() {
    return (
      <div className="store">
        <div className="store-results">
        {this.state.storeDataResults.map((storeDataResult) =>{
          return(
            <div key={storeDataResult.id}>
              <div>
              
              </div>
              Address: {storeDataResult.address_line_1}
            </div>
          )
        }
        )}
        </div>
      </div>
    )
  }
};

export default Store;
{/* <button onClick = { () => this.loadMoreStores }>Load More</button>              */}