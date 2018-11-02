import React, { Component } from 'react';
import firebase from "firebase";
import PropTypes from 'prop-types'
import {firebaseAuth, googleProvider} from "../config/firebase";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Grid, Row, Col, Button} from 'react-bootstrap';
class Login extends React.Component {

    constructor(props) {
        super(props);
        
    }

    handleLogin = () => {
        
    firebaseAuth.signInWithRedirect(googleProvider);

    }
    
  render() {

    return (
        <Grid>
          <Row className="show-grid">
    <Col xs={6} md={4}>
    </Col>
    <Col xs={6} md={4}>
    <h1 class="text-center">Welcome</h1>
    </Col>
    <Col xsHidden md={4}>
    </Col>
  </Row>
  <Row className="show-grid">
    <Col xs={6} md={4}>
    </Col>
    <Col xs={6} md={6}>
  <p>
    This is Chat webpage. To continue, your have to sign in first!
  </p>
    </Col>
    <Col xsHidden md={4}>
    </Col>
  </Row>
  <Row className="show-grid">
    <Col xs={6} md={4}>
    </Col>
    <Col xs={6} md={4}>
    <div class="div-center">
    <button class="button button1"  onClick={this.handleLogin}>Sign in with Google</button>
  </div>
    </Col>
    <Col xsHidden md={4}>
    </Col>
  </Row>
</Grid>
    )


  
    }
}
 export default Login;