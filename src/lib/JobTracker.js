import IFirebaseUser from "./src/IFirebaseUser";
import User from "./src/User";

// The JobTracker class contains a series of methods, each of which
// returns a Promise. They should be used in standard async fashion
// to initiate React component updates.

export default class JobTracker {
  static saveNewUser = (username, email, password) => {
    IFirebaseUser.createUser(new User(username, email, password));
  };
}
