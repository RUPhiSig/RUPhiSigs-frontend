import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from './App';

const HomeIndex = () => (
  <div>Default</div>
);

export default (
  <Route path="/" handler={App}>
    <DefaultRoute handler={HomeIndex} />
  </Route>
);
