import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';
import { GetuserameService } from '../getuserame.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  provider: any;

  constructor(private route: Router, public userservice: GetuserameService) {

  }
  ngOnInit(): void {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
  }

  loginWithGmail() {
    firebase.auth().signInWithPopup(this.provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let a: any;
      a = result.credential;
      var token = a.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      this.userservice.user = result.user.email;
      this.route.navigate(["main"])

      // ...
    }.bind(this)).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    this.provider = provider;

    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // The signed-in user info.
      var user = result.user;
      this.userservice.user = result.user.email;
      this.route.navigate(["main"])
      console.log(user.email);
      // ...
    }.bind(this)).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

}
