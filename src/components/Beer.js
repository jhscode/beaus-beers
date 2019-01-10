import React, { Component } from 'react';

class Beer extends Component {
  render() {
    return (
      <div className="beer-container">
        <div className="beer-image">
          {/* This will show either the image or logo of beau's */}
          { this.props.data.image_thumb_url 
            ?
            <div className="picture-container">
              <img 
              src={ this.props.data.image_thumb_url }
              alt=""
              /> 
            </div> 
            :
            <div>
              <img 
                src="/styles/img/beaus-image.png" 
                alt=""
              /> 
            </div>                  
          }
        </div>
          <p className="beer-name">{ this.props.data.name }</p>
        <button
          className="button button-description"
          onClick={ () => this.props.showDescButton(this.props.data) }
        >
        Description
        </button>
        <button
          className="button button-stores"
          onClick={ () => this.props.goToStoreButton(this.props.id) }
        >Stores
        </button>
    </div>
    )
  }
}

export default Beer;