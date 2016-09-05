import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

const Test = () => (<h1><Link to="/">Test1</Link></h1>);

const Test0 = () => (<h1><Link to="/test">Test00</Link></h1>);

injectTapEventPlugin();

ReactDOM.render(
  (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Test0} />
        <Route path="/test" component={Test} />
      </Route>
    </Router>
  </MuiThemeProvider>
  ),
  document.getElementById('root')
);
