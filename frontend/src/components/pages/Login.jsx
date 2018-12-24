import React, {Component} from 'react';

import LoginForm from '../../containers/pages/Login';
import '../../Styles/Login.css';

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

