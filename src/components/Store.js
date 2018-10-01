import React, { Fragment } from 'react';

export default (props) => (
  <Fragment>
    <div className="store-wrapper">
      {props.storeDataResults.map((storeDataResult) => {
        return(
          <div key={storeDataResult.id}>
            <div className="store-container">
            Address: {storeDataResult.address_line_1}
            Address 2: {storeDataResult.address_line_2}
            Postal Code: {storeDataResult.postal_code}
            Telephone: {storeDataResult.telephone}
            <button 
              className="button button-find-store"
              onClick={ () => props.goToMapStore(storeDataResult.latitude, 
                                storeDataResult.longitude)}>
              Find Store
              </button>
            </div>
          </div>
        )}            
      )}
    </div>
    <button 
      className="button button-load-stores"
      onClick = { () => props.loadMoreStores() }>
    Load More
    </button>            
  </Fragment>  
);