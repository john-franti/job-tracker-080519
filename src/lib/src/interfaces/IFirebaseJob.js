import fire from "../../../fire";

export default class IFirebaseJob {
  //USER Methods
  static addJob = job => {
    const newDataKey = fire
      .database()
      .ref(`Users/${localStorage.username}/jobs`)
      .push().key;
    fire
      .database()
      .ref(`Users/${localStorage.username}/jobs/${newDataKey}`)
      .set(job);
  };
  static getJobsByUsername = () => {
    return fire
      .database()
      .ref(`Users/${localStorage.username}/jobs`)
      .once("value");
  };
  static getUserJobByKey = (key) => {
    return fire
      .database()
      .ref(`Users/${localStorage.username}/jobs/${key}`)
      .once("value");
  };
}
