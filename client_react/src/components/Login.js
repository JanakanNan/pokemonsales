/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    console.log(googleUser.getBasicProfile());
    var id_token = googleUser.getAuthResponse().id_token;
    //anything else you want to do(save to localStorage)...
    this.props.updateInfo(googleUser.getBasicProfile(), id_token);
  }

  render () {
    return (
      <div>
        <GoogleLogin socialId="974233793575-dtdsg3bstqf7v8k68ggqu2d04rd8s0vu.apps.googleusercontent.com"
                     className="google-login"
                     scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
                     fetchBasicProfile={true}
                     responseHandler={this.responseGoogle.bind(this)}>
                     Login With Google
        </GoogleLogin>
      </div>
    );
  }

}

export default Login;
