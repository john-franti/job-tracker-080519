import React from "react";
import JobTracker from "./lib/JobTracker";
import "./App.css";
import Login from "./components/Login";
import HomePage from "./containers/HomePage";

class App extends React.Component {
  state = {
    user: {}
  };

  // This is set up to default drop all users into state. It is a basic test to confirm
  // interaction. Change it before deployment.
  // Note that Firebase Promises use the method toJSON(), instead of .json()
  componentDidMount() {
    JobTracker.getCurrentUser(localStorage.username)
      .then(resp => resp.toJSON())
      .then(data => this.setState({ user: data }));
    // JobTracker.login("admin", "1234");
    // JobTracker.saveJob("www.exampleJobs.com/jkdshfgkjds", "Senior Developer", "fdg7fdg68d7f6g")
  }

  render() {
    return (
      <div className="App">
        <Login />
        <HomePage />
      </div>
    );
  }
}

export default App;
