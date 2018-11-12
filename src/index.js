import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, compose } from 'redux';
import userReducer from './reducers/user-reducer';
import { Provider } from 'react-redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from "firebase";
import { config as fbconfig } from './config/firebase';
import inputReducer from './reducers/input-reducer';
import filterReducer from './reducers/filter-reducer';
import lastMessageReducer from './reducers/lastmessage-reducer';
import imageReducer from './reducers/image-reducer';

const rrfConfig = {
  userProfile: 'users',
}



// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  user: userReducer,
  input: inputReducer,
  filter: filterReducer,
  lastMessage: lastMessageReducer,
  image: imageReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)
ReactDOM.render(<Provider store={store}>
      <App/>
      </Provider>,
    document.getElementById('root')
  )
serviceWorker.unregister();
