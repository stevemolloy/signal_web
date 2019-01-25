import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../public/plc_data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    fetch('public/plc_data.json')
      .then((json_obj) => console.log(json_obj))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. Hello!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
