import React from "react";
import logo from "./logo.svg";
import JobTracker from "./lib/JobTracker";
import "./App.css";

class App extends React.Component {
  state = {
    users: {}
  };

  // This is set up to default drop all users into state. It is a basic test to confirm
  // interaction. Change it before deployment.
  // Note that Firebase Promises use the method toJSON(), instead of .json()
  componentDidMount() {
    JobTracker.getAllUsers()
      .then(resp => resp.toJSON())
      .then(data => this.setState({ users: data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
