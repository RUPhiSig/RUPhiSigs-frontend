import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Tabs, Tab } from 'material-ui/Tabs';

const Menu = (props) => {
  const { tab } = props;
  const styles = {
    backgroundColor: '#F44336',
  };
  const changeRoute = ({ props: { value } }) => browserHistory.push(`/${value || ''}`);
  return (
    <div>
      <Tabs
        value={tab}
      >
        <Tab label="Home" value="" style={styles} onActive={changeRoute} />
        <Tab label="About Us" value="about-us" style={styles} onActive={changeRoute} />
        <Tab label="Members" value="members" style={styles} onActive={changeRoute} />
        <Tab label="Contact Us" value="contact-us" style={styles} onActive={changeRoute} />
      </Tabs>
    </div>
  );
};

Menu.propTypes = {
  tab: PropTypes.string,
};

export default Menu;
