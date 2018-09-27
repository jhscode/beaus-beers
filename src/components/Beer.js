import React from 'react';

const Beer = (props) => (
  <div>
    <div>
      <img src={props.data.image_thumb_url} alt="no"/>
      {props.data.description}
    </div>

  </div>
);

export default Beer;