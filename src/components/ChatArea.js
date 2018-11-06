import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { firebaseAuth } from "../config/firebase";
import { bindActionCreators, compose } from 'redux';
import { updateUser } from '../actions/updateUser';
class ChatArea extends React.Component {
clickToChat(chattingUser) {
      var user = firebaseAuth.currentUser;
      var email, emailName;
      
      if (user != null) {
      email = user.email;
      emailName = email.split('@gmail.com');
      }
      if (chattingUser!=null) {
        
        this.props.firebase.update(`user/${emailName[0]}`, 
            {   
                isChattingWith: chattingUser});
            }
}

    render() {

      //this.props.firebase.remove('user/hungphat11997/isChattingWith');
      //this.props.firebase.remove('user/uefanamlood/isChattingWith');
      var user = firebaseAuth.currentUser;
      var email, emailName;
      
      if (user != null) {
      email = user.email;
      emailName = email.split('@gmail.com');
      }
      
      const userList  = !isLoaded(this.props.user)
      ? 'Loading'
      : isEmpty(this.props.user)
        ? 'User list is empty'
        : Object.keys(this.props.user).map(
          (key, id) => (

            (<li key={key} id={id} class="clearfix li-cursor" onClick={() => this.clickToChat(this.props.user[key].email)}>
                  <img class="user-profile" src={this.props.user[key].photoUrl} alt="avatar" />
                  <div class="about">
                    <div class="name">{this.props.user[key].name}</div>
                    
                      {this.props.user[key].online == true ? (<div class="online-stt">online</div>):<div class="status">offline</div>}
                    </div>
                  
            </li>)
            )
        )
        const arr  = !isLoaded(this.props.user)
        ? 'Loading'
        : isEmpty(this.props.user)
          ? 'User list is empty'
          : Object.keys(this.props.user).map(
            (key, id) => ( this.props.user[key])
          )
          let x = 0;
          let y = 0;
          var head;
          while(arr[x] != null) {
            console.log(arr[x].isChattingWith+"a"+email)
            
            if(arr[x].email === email) {
            while(arr[y] != null){
              if(arr[x].isChattingWith === arr[y].email) {
                head = (<div class="chat-header clearfix">
                <img class="user-profile" src={arr[y].photoUrl} alt="avatar" />
                
                <div class="chat-about">
                  <div class="chat-with">Chat with {arr[y].name}</div>
                </div>
                <i class="fa fa-star"></i>
              </div>)
              }
              y++;
            } }
            x++;
          }

        return (
            <div>
            <div class="container1 clearfix">
            <div class="people-list" id="people-list">
              <div class="search">
                <input type="text" placeholder="search" />
                <i class="fa fa-search"></i>
              </div>
              <ul class="list">
                {userList}
              </ul>
            </div>


            <div class="chat">
            {head}
              <div class="chat-history">
                <ul>
                  <li class="clearfix">
                    <div class="message-data align-right">
                      <span class="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                      <span class="message-data-name" >Olia</span> <i class="fa fa-circle me"></i>
                      
                    </div>
                    <div class="message other-message float-right">
                      Hi Vincent, how are you? How is the project coming along?
                    </div>
                  </li>
                  
                  <li>
                    <div class="message-data">
                      <span class="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
                      <span class="message-data-time">10:12 AM, Today</span>
                    </div>
                    <div class="message my-message">
                      Are we meeting today? Project has been already finished and I have results to show you.
                    </div>
                  </li>
                  
                  <li class="clearfix">
                    <div class="message-data align-right">
                      <span class="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                      <span class="message-data-name" >Olia</span> <i class="fa fa-circle me"></i>
                      
                    </div>
                    <div class="message other-message float-right">
                      Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
                    </div>
                  </li>
                  
                  <li>
                    <div class="message-data">
                      <span class="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
                      <span class="message-data-time">10:20 AM, Today</span>
                    </div>
                    <div class="message my-message">
                      Actually everything was fine. I'm very excited to show this to our team.
                    </div>
                  </li>
                  
                </ul>
                
              </div>
              
              <div class="chat-message clearfix">
                <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                        
                <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                <i class="fa fa-file-image-o"></i>
                
                <button>Send</button>
                </div>
                </div>
                </div>
                </div>
        )
    }
}

//export default ChatArea;
export default compose(
  firebaseConnect([
    'user' // { path: '/user' } // object notation
  ]),
  connect(((state) => ({
    user: state.firebase.data.user,
  })),)
)(ChatArea)