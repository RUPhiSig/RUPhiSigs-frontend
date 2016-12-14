import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import MenuTabs from './menu';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const Test = () => (<h1><Link to="/">Test1</Link></h1>);

const Test0 = () => (<h1><Link to="/test">Test0.0</Link></h1>);


/*ReactDOM.render(
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
);*/

ReactDOM.render(
  (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={MenuTabs}>
        <IndexRoute component={Test0} />
        <Route path="/test" component={Test} />
      </Route>
    </Router>
  </MuiThemeProvider>
  ),
  document.getElementById('root')
);

