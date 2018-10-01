import React from 'react';

const Description = ({ hideDescButton, showDesc, name, price, tasting_notes, serving_suggestion }) => {
  const showHideClassName = showDesc ? "modal display-block" : "modal display-none";
  return(
    <div className={ showHideClassName }>
      <section className="modal-main">
        <ul>
        <li>Name: {name}</li>
        <li>Price: {price}</li>
        <li>Tasting Notes: {tasting_notes}</li>
        <li>Serving Suggestion: {serving_suggestion}</li>
        </ul>

        <button 
          className="button button-desc-close"  
          onClick={ () => hideDescButton() }
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default Description;