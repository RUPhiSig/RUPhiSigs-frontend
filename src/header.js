import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

export default class Header extends React.Component {
	render(){
		return (
			<Paper zDepth ={1}>
				<div>
				  <img src="PSK_crest.jpg" height="203" width="360"/>
				</div>
			</Paper>
			);
	}
}