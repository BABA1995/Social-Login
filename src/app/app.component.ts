import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social-Login';
  provider:any;

  constructor(){

  }
  ngOnInit():void{
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
  }

  loginWithGmail(){
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
     let a: any;
     a = result.credential;
     var token = a.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user.email);
      // ...
    }).catch(function(error) {
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

  facebookLogin(){
    var provider = new firebase.auth.FacebookAuthProvider();
    this.provider = provider;

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // The signed-in user info.
      var user = result.user;
      console.log(user.email);
      // ...
    }).catch(function(error) {
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
