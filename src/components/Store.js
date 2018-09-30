import React, { Fragment } from 'react';

export default (props) => (
  <Fragment>
    <div className="store-results">
      {props.storeDataResults.map((storeDataResult) => {
        console.log(storeDataResult);

        return(
          <div key={storeDataResult.id}>
            Address: {storeDataResult.address_line_1}
            Address 2: {storeDataResult.address_line_2}
            Postal Code: {storeDataResult.postal_code}
            Telephone: {storeDataResult.telephone}
            <button onClick={ () => props.findStore(storeDataResult.latitude, storeDataResult.longitude)}>Find Store</button>
          </div>
        )}            
      )}
    </div>
    <button onClick = { () => props.loadMoreStores() }>
    Load More
    </button>            
  </Fragment>  
);