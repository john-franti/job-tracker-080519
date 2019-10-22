import IFirebaseUser from "./src/interfaces/IFirebaseUser";
import User from "./src/User";
import IFirebaseJob from "./src/interfaces/IFirebaseJob";
import Job from "./src/Job";
import Note from  './src/Note'

// The JobTracker class contains a series of methods, each of which
// returns a Promise. They should be used in standard async fashion
// to initiate React component updates using standard Promise and async
// `then()` expressions. (use .toJSON() to parse)

export default class JobTracker {
  // Get a master list of all users (DO NOT USE, ADMIN and TESTING ONLY)
  static getAllUsers = () => IFirebaseUser.getUsers();

  // Create a new user, needs 3 params, automatically logs you in
  static createUser = (username, email, password) => {
    return IFirebaseUser.createUser(new User(username, email, password)).then(
      this.login(username, password)
    );
  };

  // Log in as a user
  // on success sets username in localStorage
  // on failure removes username key from localStorage
  static login = (u, p) => IFirebaseUser.loginAsUser(u, p);

  // Recover a user by username
  static getCurrentUser = username => IFirebaseUser.getUserByUsername(username);

  // Recover jobs for a user by username
  // NOT NEEDED, JOBS ARE NESTED WIHTIN USER jobs KEY
  // static getUserJobs = username => IFirebaseJob.getJobsByUsername(username);

  // Add a job to a user
  static addJob = (url, title, external_job_id = "") => {
    IFirebaseJob.addJob(new Job(url, title, external_job_id));
  };

  // This method adds a new Note to a job.
  static addNote = (content, jobId) => {
    IFirebaseJob.addNote(new Note(content), jobId);
  };
}
