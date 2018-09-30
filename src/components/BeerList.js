import React, { Component } from 'react';
import Beer from './Beer';
import Description from './Description';

class BeerList extends Component {

  goToStoreButton = (productID) => {
    this.props.updateStore(productID);
    this.props.history.push(`/store/${productID}`);
  }

  render() {
    return (
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
        >
        <p>
          Name: { this.props.state.name }
          Price: { this.props.state.price_in_cents }
          Tasting Notes: { this.props.state.tasting_notes }
          Description: { this.props.state.description }
        </p>
        </Description>
      </div> 
    )
  }
}

export default BeerList;