import firebase from "firebase";
export const config = {
    apiKey: "AIzaSyAB-_sEAJ4pXf4unEhRX779gpG8WYKc_o8",
    authDomain: "doancnm.firebaseapp.com",
    databaseURL: "https://doancnm.firebaseio.com",
    projectId: "doancnm",
    storageBucket: "doancnm.appspot.com",
    messagingSenderId: "453381002828"
  };
  firebase.initializeApp(config);
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });
  export const firebaseAuth = firebase.auth();


