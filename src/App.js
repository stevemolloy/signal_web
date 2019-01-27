import React, { Component } from 'react';
import './App.css';
import data from './plc_data.js';
import Header from './Components/Header';
import Body from './Components/Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.setState({
      data: data,
      display_data: data
    });
  }

  clickHandler = (val) => {
    this.setState({
      display_data: this.state.data[val]
    });
  }

  render() {
    return (
      <>
        <Header title="PLC Signal Web Browser"/>
        <Body
          text="PLC Signal Web Browser"
          data={this.state.display_data}
          clickHandler={this.clickHandler.bind(this)}
        />
      </>
    );
  }
}

export default App;
