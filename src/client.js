import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './reducers';
import App from './components/App';
import {
  HomeContent,
  MembersContent,
  RushContent,
  AboutUsContent,
  ContactUsContent,
} from './components/ContentCards';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#F44336',
    accent1Color: '#616161',
  },
});

const store = createStore(reducers);

ReactDOM.render(
  (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
          <Route path="/" components={App}>
            <IndexRoute components={HomeContent} />
            <Route path="members" components={MembersContent} />
            <Route path="rush" components={RushContent} />
            <Route path="about-us" components={AboutUsContent} />
            <Route path="contact-us" components={ContactUsContent} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  ),
  document.getElementById('root')
);

