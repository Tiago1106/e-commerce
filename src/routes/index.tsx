import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default Routes;
