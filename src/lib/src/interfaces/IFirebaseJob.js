import fire from "../../../fire";

export default class IFirebaseJob {
  //USER Methods
  static addJob = job => {
    const newJobKey = fire
      .database()
      .ref(`Users/${localStorage.username}/jobs`)
      .push().key;
    fire
      .database()
      .ref(`Users/${localStorage.username}/jobs/${newJobKey}`)
      .set({...job, id:newJobKey});
  };

  static addNote = (note, jobId) => {
    const newNoteKey = fire
      .database()
      .ref(`Users/${localStorage.username}/jobs/${jobId}/notes`)
      .push().key;
    fire
      .database()
      .ref(`Users/${localStorage.username}/jobs/${jobId}/notes/${newNoteKey}`)
      .set({...note, id:newNoteKey});
  };
}
