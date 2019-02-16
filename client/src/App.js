import React, { Component } from 'react';
import axios from 'axios';

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

  render() {
    console.log(this.state);
    return (
      <div className="App">
  
      </div>
    );
  }
}

export default App;
