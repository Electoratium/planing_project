import React, { Component } from 'react';

import LoginForm from '../../containers/pages/Login';
import '../../styles/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <LoginForm />
      </div>
    );
  }
}

export default Login;
