import React, { PropTypes } from 'react';
import MenuTabs from './Menu';
import Header from './Header';

const App = (props) => {
  let tab = props.location.pathname.split('/');
  tab = tab[1] || tab[0];

  return (
    <div>
      <Header />
      <MenuTabs tab={tab} />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default App;
