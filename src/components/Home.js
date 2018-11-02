import React, { Component } from 'react';
import firebase from "firebase";
import {firebaseAuth, googleProvider} from "../config/firebase";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Grid, Row, Col, Button, ListGroupItem, ListGroup, Image} from 'react-bootstrap';
import ChatArea from './ChatArea';
class Home extends React.Component {

    constructor(props) {
        super(props);
    }


    logout = () => {
        firebaseAuth.signOut();

    }

    render() {
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
        }
        return (
            <div>
                <Grid>
                <Row className="show-grid">
    <Col xs={6} md={4}>
    <div>{name}</div>
    </Col>
    <Col xs={6} md={4}>
    </Col>
    <Col xs={6} md={4}>
    <div>User: {email} <button class="button2" onClick={this.logout}>Logout</button></div>
    </Col>
    </Row>
    <div class="spacer"></div>
    <ChatArea/>
    </Grid>
    </div>
    
        )

    }

}

export default Home;