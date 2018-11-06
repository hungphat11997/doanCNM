import React, { Component } from 'react';
import {firebaseAuth, googleProvider, adminAuth} from "../config/firebase";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Grid, Row, Col, Button, ListGroupItem, ListGroup, Image} from 'react-bootstrap';
import ChatArea from './ChatArea';
import { withFirebase } from 'react-redux-firebase';
class Home extends React.Component {

    constructor(props) {
        super(props);
    }


    logout = () => {
        var user = firebaseAuth.currentUser;
        var name, email, photoUrl, uid, emailVerified, emailName;
        
        if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
        emailName = email.split('@gmail.com')

            this.props.firebase.update(`user/${emailName[0]}`, 
            {   
                online: false});
                this.props.firebase.logout();
        }
    }

    render() {

        var user = firebaseAuth.currentUser;
        var name, email, photoUrl, uid, emailVerified, emailName;
        
        if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
        emailName = email.split('@gmail.com')

            this.props.firebase.set(`user/${emailName[0]}`, 
            {   name: name,
                email: email,
                photoUrl: photoUrl,
                emailVerified: emailVerified,
                isChattingWith: email,
                online: true});
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

export default withFirebase(Home);