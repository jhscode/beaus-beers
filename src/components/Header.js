import React from 'react';

export default () => (
  <header>
    <nav className="navbar fixed-top navbar-light bg-inverse" style={{backgroundColor: "#512b1b"}}>
    <a className="navbar-brand" href="#">
      <span data-toggle="tooltip" data-placement="top" title="Beaus Bears">
          <img className ="logo-custom d-inline-block align-center" width="75px" height="75px" alt=""/>
      </span>
      <span style={{paddingLeft: "15px"}}>&nbsp;</span>
      <span className="title-custom align-center">Beaus</span>
    </a>
  </nav>
</header>
);