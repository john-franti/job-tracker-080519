import fire from "../../../fire";

export default class IFirebaseUser {
  //USER Methods
  static createUser = user => {
    fire
      .database()
      .ref(`Users/${user.username}`)
      .set(user);
  };
  static getUsers = () => {
    return fire
      .database()
      .ref("Users")
      .once("value");
  };
  static getUserByUsername = username => {
    return fire
      .database()
      .ref(`Users/${username}`)
      .once("value");
  };
}
