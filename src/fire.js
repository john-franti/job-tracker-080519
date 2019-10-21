import firebase from "firebase";
var config = {
  apiKey: "AIzaSyCvyyadO6ewbdaxh-De3xSuY0ga4MOJ6-Q",
  authDomain: "job-tracker-080519.firebaseapp.com",
  databaseURL: "https://job-tracker-080519.firebaseio.com",
  projectId: "job-tracker-080519",
  storageBucket: "job-tracker-080519.appspot.com",
  messagingSenderId: "172999950535",
  appId: "1:172999950535:web:cc64211da736a113a07ee2"
};
var fire = firebase.initializeApp(config);
export default fire;
