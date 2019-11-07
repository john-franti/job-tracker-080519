import React from "react";
import JobTracker from "./lib/JobTracker";
import "./App.css";
import Login from "./components/Login";
import HomePage from "./containers/HomePage";
import Job from "./lib/src/Job";
import DashBoard from "./containers/DashBoard";

class App extends React.Component {
  state = {
    user: {},
    users: []
  };

  // This is set up to default drop all users into state. It is a basic test to confirm
  // interaction. Change it before deployment.
  // Note that Firebase Promises use the method toJSON(), instead of .json()
  componentDidMount() {
    JobTracker.login("admin", "1234");
    JobTracker.getCurrentUser(localStorage.username)
      .then(resp => resp.toJSON())
      .then(data => this.setState({ user: data }));

    JobTracker.getAllUsers()
      .then(response => response.toJSON())
      .then(users => this.setState({users: users}));
    // JobTracker.saveJob("www.exampleJobs.com/jkdshfgkjds", "Senior Developer", "fdg7fdg68d7f6g")

  

  }

  // divide repsonse into a user object and a jobs object

  render() {
    return (
      <div className="App">
        { !this.state.user ? 
          <Login /> : 
          <DashBoard user={this.state.users[localStorage.getItem("username")]} /> 
        }
      </div>
    );
  }
}

export default App;
