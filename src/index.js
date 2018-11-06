import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, compose } from 'redux';
import userReducer from './reducers/user-reducer';
import { Provider } from 'react-redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from "firebase";
import { config as fbconfig } from './config/firebase';

// const allReducers = combineReducers({
//   user: userReducer,
// })
// const store = createStore(allReducers);
// const initialState = {} // set initial state here
// const store = configureStore(initialState)

const rrfConfig = {
  userProfile: 'users',
  
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
//firebase.initializeApp(fbconfig)

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  //reduxFirestore(firebase) // <- needed if using firestore
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  user: userReducer,
  //firestore: firestoreReducer // <- needed if using firestore
})

// const firestore = firebase.firestore();
//   const settings = {/* your settings... */ timestampsInSnapshots: true};
//   firestore.settings(settings);

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)
render(<Provider store={store}>
      <App/>
      </Provider>,
    document.getElementById('root')
  )
serviceWorker.unregister();