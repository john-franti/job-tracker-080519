import IFirebaseUser from "./src/interfaces/IFirebaseUser";
import User from "./src/User";

// The JobTracker class contains a series of methods, each of which
// returns a Promise. They should be used in standard async fashion
// to initiate React component updates using standard Promise and async
// `then()` expressions.

export default class JobTracker {
  static getAllUsers = () => IFirebaseUser.getUsers();
  static saveNewUser = (username, email, password) => {
    return IFirebaseUser.createUser(new User(username, email, password));
  };
  static findUser = username => IFirebaseUser.getUserByUsername(username);
}
