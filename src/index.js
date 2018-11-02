import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user-reducer';
import { Provider } from 'react-redux';

const allReducers = combineReducers({
  user: userReducer,
})
const store = createStore(allReducers);
render(<Provider store={store}>
      <App />
      </Provider>,
    document.getElementById('root')
  )
serviceWorker.unregister();