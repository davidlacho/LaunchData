import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rocketData : [],
      currentRocket : null,
      err: null,
    }
  }

  componentDidMount() {
    axios.get('/api/launch')
    .then((response) => {
      this.setState({
        rocketData: response.data,
      });
    })
    .catch((err) => {
      this.setState({
        err: err,
      })
    })
  }

  renderRocketData() {
    return this.state.rocketData.map((rocket) => (
      <Card className="rocket-card">
        <CardMedia
          className="rocket-card-img"
          image={rocket.img}
          title={rocket.name}
          alt={rocket.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {rocket.name}
            {rocket.rocketWiki && <a href={rocket.rocketWiki} title={`${rocket.agency} wiki`} rel="noopener noreferrer" target="_blank">(Wiki)</a>}
          </Typography>
          <Typography component="p">
            Launch Agency: {rocket.agency || 'Unknown'}
            {rocket.agencyWiki && <a href={rocket.agencyWiki} title={`${rocket.agency} wiki`} rel="noopener noreferrer" target="_blank">(Wiki)</a>}
          </Typography>
          <Typography component="p">
            Launch Location: {rocket.location || 'Unknown'}
            {rocket.launchWiki && <a href={rocket.launchWiki} title={`${rocket.launchWiki} wiki`} rel="noopener noreferrer" target="_blank">(Wiki)</a>}
          </Typography>
          <Typography component="p">
            Launch Time: {(rocket.launchTime && <Moment fromNow>{rocket.launchTime}</Moment>) || 'Unknown'}
          </Typography>
        </CardContent>
      </Card>
    ));
  }

  render() {
    return (
      <div className="App">
         <AppBar position="sticky" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Launches
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="rockets-container">
          {this.renderRocketData()}
        </div>
      </div>
    );
  }
}

export default App;
