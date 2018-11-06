import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {firebaseAuth, googleProvider, adminAuth} from "./config/firebase";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { updateUser } from './actions/updateUser';
import { bindActionCreators, compose } from 'redux';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';

class App extends React.Component {

  constructor() {
    super();
  }

  onUpdateUser = (user) => {
    this.props.onUpdateUser(user);
  }
  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    firebaseAuth.onAuthStateChanged((user) => {
      this.onUpdateUser(user);
      

      //console.log(user);
      if (user) {
        //console.log(user);
      } else {
        console.log("no user");
      }
      
    });
  }

  render() {
    var url = this.props.user ?  ( <Home/>) : (<Login/>);
    return (
          <div>
            {url}
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
