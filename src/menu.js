import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tab: {
    backgroundColor: "#F44336",
  },
  card:{
    cardtitle:{
      textAlign: "center",
    }
  }
};

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: "#F44336",
    accent1Color: "#616161",
  },
});

// function handleActive(tab) {
//   alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
// }

export default class MenuTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="Home" value="a" style={styles.tab}>
            <Card>
              <CardTitle title="Home" style={styles.card.cardtitle}/>
              <CardText>
                Phi Sigs sample text tomer is a jew.
              </CardText>
            </Card>
          </Tab>
          <Tab label="About Us" value="c" style={styles.tab}>
            <Card>
              <CardTitle title="About Us" style={styles.card.cardtitle}/>
              <CardText>
                Phi Sigs sample text tomer is a jew.
              </CardText>
            </Card>
          </Tab>
          <Tab label="Members" value="b" style={styles.tab}>
            <Card>
              <CardTitle title="Members" style={styles.card.cardtitle}/>
              <CardText>
                Phi Sigs sample text tomer is a jew.
              </CardText>
            </Card>
          </Tab>
          <Tab label="Contact Us" value="d" style={styles.tab}>
            <Card>
              <CardTitle title="Contact Us" style={styles.card.cardtitle}/>
              <CardText>
                Phi Sigs sample text tomer is a jew.
              </CardText>
            </Card>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}