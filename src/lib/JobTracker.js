import IFirebaseUser from "./src/interfaces/IFirebaseUser";
import User from "./src/User";

// The JobTracker class contains a series of methods, each of which
// returns a Promise. They should be used in standard async fashion
// to initiate React component updates using standard Promise and async
// `then()` expressions. (use .toJSON() to parse)

export default class JobTracker {
  // Get a master list of all users (DO NOT USE, ADMIN and TESTING ONLY)
  static getAllUsers = () => IFirebaseUser.getUsers();

  // Create a new user, needs 3 params
  static saveNewUser = (username, email, password) => {
    return IFirebaseUser.createUser(new User(username, email, password));
  };

  // Recover a user by username
  static findUser = username => IFirebaseUser.getUserByUsername(username);
}
