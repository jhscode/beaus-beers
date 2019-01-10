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
        <header>
          <Header />
        </header>
        <div className="beerlist-container">
          <ul className="beerlist-list">
            { this.props.state.datas.map(data =>
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
            showDesc={ this.props.state.showDesc }
            hideDescButton = { this.props.hideDescButton } 
            name= { this.props.state.name }
            price= { this.props.state.price_in_cents }
            tasting_notes= { this.props.state.tasting_note }
            serving_suggestion= { this.props.state.serving_suggestion } 
          />
        </div> 
      </Fragment>
    )
  }
}

export default BeerList;