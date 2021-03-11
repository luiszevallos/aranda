import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />11
    </Switch>
  </BrowserRouter>
);

export default App;
