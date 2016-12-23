import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
	img:{
		overflow: "hidden",
		width: "100%",
	}
};
const Header = () => (
  <Paper zDepth={1}>
    <div>
      <img src="banner.jpg" alt="PSK" style={style.img}/>
    </div>
  </Paper>
);

export default Header;
