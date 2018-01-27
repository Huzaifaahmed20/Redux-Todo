import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOArsIgpoZtx-AD1SUufFTzBOB25EF7XY",
  authDomain: "todo-with-redux.firebaseapp.com",
  databaseURL: "https://todo-with-redux.firebaseio.com",
  projectId: "todo-with-redux",
  storageBucket: "todo-with-redux.appspot.com",
  messagingSenderId: "60185047338"
};
let fires = firebase.initializeApp(config);
export default fires;