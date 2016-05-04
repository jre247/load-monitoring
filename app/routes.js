import React from 'react';
import {Route} from 'react-router';
import App from './components/app';
import Load from './components/Load';

export default (
  <Route component={App}>
    <Route path='/' component={Load} />
  </Route>
);
