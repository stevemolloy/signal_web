import React, { Component } from 'react';
import './App.css';
import data from './plc_data.js';
import Header from './Components/Header';
import Body from './Components/Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      display_data: null,
      breadcrumbs: []
    }
  }

  componentDidMount() {
    this.setState({
      data: data,
      display_data: data
    });
  }

  getNewDisplayData = (breadcrumbs) => {
    let new_display_data = this.state.data;
    for (let i=0; i<breadcrumbs.length; i++) {
      new_display_data = new_display_data[breadcrumbs[i]];
    }

    return new_display_data;
  }

  clickHandler = (val) => {
    const breadcrumbs = this.state.breadcrumbs.concat(val);
    const new_display_data = this.getNewDisplayData(breadcrumbs);
    this.setState({
      display_data: new_display_data,
      breadcrumbs: breadcrumbs
    });
  }

  breadcrumbClickHandler = (index) => {
    const breadcrumbs = this.state.breadcrumbs;
    breadcrumbs.splice(index+1);
    const new_display_data = this.getNewDisplayData(breadcrumbs);
    this.setState({
      display_data: new_display_data,
      breadcrumbs: breadcrumbs
    })
  }

  render() {
    return (
      <>
        <Header
          title="PLC Signal Web Browser"
          breadcrumbs={this.state.breadcrumbs}
          breadcrumbClickHandler={this.breadcrumbClickHandler.bind(this)}
        />
        <Body
          text="PLC Signal Web Browser"
          data={this.state.display_data}
          breadcrumbs={this.state.breadcrumbs}
          clickHandler={this.clickHandler.bind(this)}
        />
      </>
    );
  }
}

export default App;
