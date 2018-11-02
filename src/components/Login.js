import React, { Component } from 'react';
import firebase from "firebase";
import PropTypes from 'prop-types'
import {firebaseAuth, googleProvider} from "../config/firebase";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);
        
    }

    handleLogin = () => {
        
    firebaseAuth.signInWithRedirect(googleProvider);

    }
    
  render() {

    return (
        
        <div>
            <h1>Welcome</h1>
            <button class="button button1" type="submit" onClick={this.handleLogin}>Press to login</button>
        </div>
    );
  }
}

 export default Login;