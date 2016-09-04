import React, { PropTypes } from 'react';

const App = (props) => {
  const { children } = props;
  return (
    <div>
      <div>Hello Bitch</div>
      {children}
    </div>
  );
};

App.propTypes = { children: PropTypes.node };

export default App;
