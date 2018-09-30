import React, { Component, Fragment } from 'react';

class Beer extends Component {
  render() {
    return (
    <Fragment>
      <div className="beer-container">
        <h3 className="beer-name">{ this.props.data.name }</h3>
        {/* This will show either the image or logo of beau's */}
        { this.props.data.image_thumb_url?
          <div className="picture-container">
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
      </div>
      <div>
        <button
          className="button-description"
          onClick={ () => this.props.showDescButton(this.props.data) }
        >
        Description
        </button>
      </div>
        <button
          className="button-stores"
          onClick={ () => this.props.goToStoreButton(this.props.id) }
        >Stores
        </button>
    </Fragment>
    )
  }
}

export default Beer;