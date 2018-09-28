import React, { Component } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;
const rootStoreURL = `http://lcboapi.com/stores?access_key=${apiKey}`

class Beer extends Component {
  state = {
    storeData: [],
    page: null
  }

  showDescription = (desc) => {
    console.log(desc);
    
  }

  showStore = async(productID) => {
    console.log(productID);
    // make api call to stores
    const storeURL = await fetch(`${rootStoreURL}&product_id=${productID}&per_page=100`)
    const storeData = await storeURL.json();
    console.log(storeData);
  }

  render() {
    return (
    <div>
      { this.props.data.image_thumb_url?
        <div>
          <img 
          src={ this.props.data.image_thumb_url }
          alt=""
          /> 
        </div> :
        <div>
          <img 
            src="/beaus-image.png" 
            alt=""
          /> 
        </div>                  
      }
      <p>{ this.props.data.name }</p>
      <button
        onClick={ () => this.showDescription(this.props.data) }
      >
      Description
      </button>
      <button
        onClick={ () => this.showStore(this.props.id) }
      >Stores
      </button>
    </div>
    )
  }
}

export default Beer;