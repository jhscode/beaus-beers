import React, { Component } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;
const storeURL = `http://lcboapi.com/products?access_key=${apiKey}`

 class Beer extends Component {   
  showDescription = (desc) => {
    console.log(desc);
  }

  showStore = async(productID) => {
    console.log(productID);
    // make api call to stores
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