import React, { PropTypes } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';

const App = (props) => {
  const { children } = props;
  return (
    <div>
      <div>Hello World</div>
      {children}
    </div>
  );
};

App.propTypes = { children: PropTypes.node };

export default App;
