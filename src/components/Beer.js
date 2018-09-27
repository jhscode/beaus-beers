import React, { Component } from 'react';

 class Beer extends Component {
   render() {
     return (
      <div>
      <div>
        <img 
          src={ this.props.data.image_thumb_url } 
          alt={ this.props.data.name }
        /> 
      </div>
        <button>Description</button>
        <button>Stores</button>
      </div>
     )
   }
  }

export default Beer;