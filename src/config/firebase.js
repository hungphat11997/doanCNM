import firebase from "firebase";
var config = {
    apiKey: "AIzaSyAB-_sEAJ4pXf4unEhRX779gpG8WYKc_o8",
    authDomain: "doancnm.firebaseapp.com",
    databaseURL: "https://doancnm.firebaseio.com",
    projectId: "doancnm",
    storageBucket: "doancnm.appspot.com",
    messagingSenderId: "453381002828"
  };
  firebase.initializeApp(config);
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const firebaseAuth = firebase.auth();