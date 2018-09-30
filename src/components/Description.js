import React from 'react';

const Description = ({ hideDescButton, showDesc, children }) => {
  const showHideClassName = showDesc ? "modal display-block" : "modal display-none";

  return(
    <div className={ showHideClassName }>
      <section className="modal-main">
        {children}
        <button onClick={ () => hideDescButton() }>Close</button>
      </section>
    
    </div>
  );
};

export default Description;