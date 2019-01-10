import React, { Component, Fragment } from 'react';
import Beer from './Beer';
import Description from './Description';
import Header from './Header';

class BeerList extends Component {

  goToStoreButton = (productID) => {
    this.props.updateStore(productID);
    this.props.history.push(`/store/${productID}`);
  };
  
  render() {
    return (
      <Fragment>
        <div className="beerlist-container">
          <ul className="beerlist-list">
            { this.props.datas.map(data =>
              <Beer 
                data={ data }
                key={ data.id }
                id={ data.id }
                desc={ data.description }
                showDescButton={ this.props.showDescButton }
                goToStoreButton={ this.goToStoreButton }
              />
            )}
          </ul>
          <Description 
            showDesc={ this.props.showDesc }
            hideDescButton = { this.props.hideDescButton } 
            name= { this.props.name }
            price= { this.props.price_in_cents }
            tasting_notes= { this.props.tasting_note }
            serving_suggestion= { this.props.serving_suggestion } 
          />
        </div> 
      </Fragment>
    )
  }
}

export default BeerList;