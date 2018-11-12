import React from 'react';
import {firebaseAuth} from "../config/firebase";
import { Grid, Row, Col } from 'react-bootstrap';
import ChatArea from './ChatArea';
import { withFirebase } from 'react-redux-firebase';
class Home extends React.Component {



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

    componentDidMount = () => {
        window.addEventListener("beforeunload", (ev) => 
{  
    ev.preventDefault();
    this.logout();
});
    }
    
    componentWillUnmount = () => {
        window.addEventListener("beforeunload", (ev) => 
        {  
            ev.preventDefault();
            this.logout();
        });
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

            this.props.firebase.update(`user/${emailName[0]}`, 
            {   name: name,
                email: email,
                photoUrl: photoUrl,
                emailVerified: emailVerified,
                online: true});
        }
 
        return (
            <div>
                <Grid>
                <Row className="show-grid">
    <Col xs={6} md={4}>
    <div><img class="user-profile" src={photoUrl} alt="avatar" /> {name}</div>
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