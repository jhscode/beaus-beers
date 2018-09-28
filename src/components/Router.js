import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import Description from './Description';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ App } />
      <Route path="/:id/description" component={ Description } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
);

export default Router;