import React, { Component } from 'react';
import firebase from "firebase";
import {firebaseAuth, googleProvider} from "../config/firebase";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
class Home extends React.Component {

    constructor(props) {
        super(props);
    }


    logout = () => {
        firebaseAuth.signOut();

    }

    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>
               <button class="button button2" onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;