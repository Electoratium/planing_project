import React, {Component} from 'react';

import '../../Styles/Login.css';

class Login extends Component {
    state = {

    };
    onLogin = event => {
        event.preventDefault();
        console.log('gorrr')
    };

    render() {
        return (
            <div className="login-container">
                <form className="form-signin" onSubmit={onLogin}>
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Вход</h1>
                    </div>
                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                            <label htmlFor="inputEmail">Email</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                        <label htmlFor="inputPassword">Пароль</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Запомнить меня
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
                </form>
            </div>
        );
    }
}

export default Login;

