import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {firebaseAuth } from "./config/firebase";
import { connect } from 'react-redux';
import { updateUser } from './actions/updateUser';
import { bindActionCreators } from 'redux';

class App extends React.Component {

  onUpdateUser = (user) => {
    this.props.onUpdateUser(user);
  }
  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    firebaseAuth.onAuthStateChanged((user) => {
      this.onUpdateUser(user);

      if (user) {
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
